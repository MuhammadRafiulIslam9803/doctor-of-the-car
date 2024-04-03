import React, { useEffect, useState } from 'react';

const SingleOrder = ({order ,handleDelateBtn}) => {
    const {_id , title ,price ,name , email ,phone,detailsId} = order
    console.log(detailsId)
    const [img ,setImg] = useState({})
    useEffect(()=>{
        //jokon databse a data pataice cheackout er maddome tokon id ta patai diyece
        //jate ekane id ta dia oitar picture ta kuje pete pari data load kore 
        //ekane data.img use nah kore puro data ta state set kore aro information nite partam jodi cai
        fetch(`http://localhost:5000/service/${detailsId}`)
        .then(res =>res.json())
        .then(data =>setImg(data.img))
    },[detailsId])
    return (
        <tr>
            <th>
                <label>
                    <button onClick={ ()=>handleDelateBtn(order)} className=' text-red-400'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title? title : 'unknown'}</div>
                        <div className="text-sm opacity-50">${price? price : "20"}</div>
                    </div>
                </div>
            </td>
            <td>
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{phone}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default SingleOrder;