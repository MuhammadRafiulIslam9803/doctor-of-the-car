import React from 'react';
import './Bamer.css'
import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';
import img5 from '../../assets/images/banner/5.jpg';
import img6 from '../../assets/images/banner/6.jpg';
import SingleBanare from './SingleBanare';

const carusrslImages = [
   {
    id : 1,
    image : img1,
    next : 2,
    previous :6
   },
   {
    id : 2,
    image : img2,
    next : 3,
    previous :1
   },
   {
    id : 3,
    image : img3,
    next : 4,
    previous :2
   },
   {
    id : 4,
    image : img4,
    next : 5,
    previous :3
   },
   {
    id : 5,
    image : img5,
    next : 6,
    previous :4
   },
   {
    id : 6,
    image : img6,
    next : 1,
    previous :5
   },
]

const Baner = () => {
    return (
        <div className='w-full mx-auto pt-10'>
            <div className="carousel w-full rounded-xl ">
                {/* <div id="slide1" className="carousel-item relative w-full">
                    <div className='img-gradient'>
                      <img src={img1} alt=''className="w-full " />
                    </div>
                    <div  className="absolute flex justify-end transform -translate-y-1/2 left-20  top-1/4">
                        <h1 className=' text-6xl text-white'>
                            Get Service <br/>
                            In AN  <br/>
                            Affordable Price <br/>
                        </h1>
                    </div>

                    <div  className="absolute flex justify-end transform -translate-y-1/2 left-20 w-2/5 top-1/2">
                        <h1 className=' text-3xl text-white'>
                            Here we provide a sweet room for the customer there he/she stay until the condition of car are very well
                        </h1>
                    </div>

                    <div  className="absolute flex justify-end transform -translate-y-1/2 left-20  top-3/4">
                        <button className="btn btn-warning">Warning</button>
                        <button className="btn btn-outline btn-warning ml-4">Warning</button>
                    </div>

                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle ml-2">❮</a>
                        <a href="#slide2" className="btn btn-circle ml-3">❯</a>
                    </div>
                    
                </div> */}
                
                {
                    carusrslImages.map(singleCarusel => <SingleBanare
                    key={singleCarusel.id}
                    banner ={singleCarusel}
                ></SingleBanare>)
                }
            </div>
        </div>
        );
        
};

export default Baner;