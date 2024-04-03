import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Firebase/UserContext';
import SingleOrder from './SingleOrder';

const Orders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/cheakout?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(err => console.error(err))
    }, [user?.email])
    console.log(orders)
    console.log(orders.length)

    const handleDelateBtn =user =>{
        console.log(`clicked ${user._id}`)
        const agree = window.confirm(`Are you want to delete ${user.name}`)
        if(agree){
            fetch(`http://localhost:5000/cheakout/${user._id}`,{
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    alert('User Delete Successfully')
                    const remainingUser = orders.filter(ordersUser => ordersUser._id !== user._id) 
                    setOrders(remainingUser)
                }
            })
        }
    }
    return (
        <div className="overflow-x-auto mb-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>User</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                      orders.map(order =><SingleOrder
                      key={order._id}
                      order={order}
                      handleDelateBtn={handleDelateBtn}
                      ></SingleOrder>)
                    }
                    
                </tbody>


            </table>
        </div>
    );
};

export default Orders;