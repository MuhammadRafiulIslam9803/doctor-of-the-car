import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Firebase/UserContext';

const CheakOut = () => {
    const details = useLoaderData()
    const {user} = useContext(AuthContext)
    const { title, price} = details

    const handleCheackOutOrders=event =>{
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = form.email.value;
        const textValue = form.textArea.value;

        console.log(name , phone,email , textValue)
        const userDetails = {
            title,
            price,
            name,
            phone,
            email,
            textValue,
        }
        fetch('http://localhost:5000/cheakout',{
            method : 'POST',
            headers: {
                "Content-Type" :"application/json"
            },
            body : JSON.stringify(userDetails)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.error(err))


    }

    return (
        <div>
            <div className=' p-6 w-full'>
                <h1 className=' text-center text-5xl text-sky-600'>CheakOut Your Orders</h1>
            </div>
            <div className='border-solid border-2 border-sky-500 bg-sky-600 rounded-xl p-6 w-full'>
                <h1 className=' text-center text-4xl text-white'>{title}</h1>
                <h1 className=' text-center text-4xl text-white'> Price :${price}</h1>
            </div>
            <form onSubmit={handleCheackOutOrders}>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5 mt-7 mb-7'>
                    <input type="text" name='firstName' placeholder="Your First Name" className="input input-bordered input-info w-full" required />
                    <input type="text" name='lastName' placeholder="Your Last Name" className="input input-bordered input-info w-full" required />
                    <input type="text" name='phone' placeholder="Your Phone Number" className="input input-bordered input-info w-full" required />
                    <input type="email" name='email' defaultValue={user?.email} readOnly placeholder="Your Email" className="input input-bordered input-info w-full" required />
                </div>
                <div>
                    <textarea name='textArea' className="textarea textarea-info textarea-lg w-full mb-3" placeholder="Leave Your Message Here" required></textarea>
                </div>
                <div>
                    <input type="submit" className="btn btn-info mb-5 text-white w-full" />
                </div>
            </form>
        </div>
    );
};

export default CheakOut;