import React from 'react';
import { Helmet } from 'react-helmet-async';
import img1 from '../../Images/top-view-assortment-vegetables-paper-bag.jpg';

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>Blogs - Veggie Mart</title>
            </Helmet>
            <div>
            <div className="px-1 ml-8 mt-12">
                    <h4 className="font-bold text-center sm:text-5xl text-3xl mt-2 pt-2 mb-2 text-orange-600">VE<span className="italic">GG</span>IE MART</h4>
            </div>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-8'>
                <div>
                    <img className='w-full' src={img1} alt="" srcset="" />
                </div>
                <div>
                    <p className='mt-5 me-10 mr-24 text-1xl text-green-800 justify-around text-justify'>We started out journey in the early 2019 with the dream of delivering the best quality products at the doorsteps of our beloved consumers in Dhaka city. As we improved our delivery system within time, we started delivery all over the country with the fastest delivery system.</p><br></br>
                    <p className='mt-5 me-10 mr-24 text-1xl text-green-800 justify-around text-justify'>We are a team of 3 engineers come business entreprenuers who thrive for digitally developed country!</p><br></br>
                    <p className='mt-5 me-10 mr-24 text-1xl text-green-800 justify-around text-justify'>All we can say is, this is just the beginning for us!!</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;

