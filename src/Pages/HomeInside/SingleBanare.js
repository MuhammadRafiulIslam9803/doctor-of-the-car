import React from 'react';
import { Link } from 'react-router-dom';

const SingleBanare = ({banner}) => {
    const {image ,next ,previous ,id}= banner;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-gradient'>
                <img src={image} alt='' className="w-full " />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-20  top-1/4">
                <h1 className=' text-6xl text-white'>
                    Get Service <br />
                    In AN  <br />
                    Affordable Price <br />
                </h1>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-20 w-2/5 top-1/2">
                <h1 className=' text-3xl text-white'>
                    Here we provide a sweet room for the customer there he/she stay until the condition of car are very well
                </h1>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-20  top-3/4">
                <button className="btn btn-warning">Warning</button>
                <button className="btn btn-outline btn-warning ml-4">Warning</button>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                {/* <Link className="btn btn-circle ml-2" to={`#slide${previous}`}>❮</Link>
                <Link to={`#slide${next}`} className="btn btn-circle ml-3">❯</Link> */}
                <a href={`#slide${previous}`} className="btn btn-circle ml-2">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle ml-3">❯</a>
            </div>

        </div>
    );
};

export default SingleBanare;