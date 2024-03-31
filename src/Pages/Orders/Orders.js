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
    return (
        <div className="overflow-x-auto">
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
                      ></SingleOrder>)
                    }
                    
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>User</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default Orders;