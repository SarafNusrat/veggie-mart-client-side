import React from 'react';
import bannerImage from '../../../src/Images/Banner2.jpg'

const Home = () => {
    return (
        <div>
            <h2>This is home</h2>
            <div className="rounded ml-4 border-l-4 border-orange-500 overflow-hidden shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-2">
               <div className="px-1 ml-8 mt-12">
                  <h4 className="font-bold text-center sm:text-6xl text-4xl mt-16 pt-16 mb-2 text-orange-600">VEGGIE MART</h4>
                  <p className="font-bold text-center sm:text-5xl text-3xl mb-2 text-blue-200">The Inventory</p> 
                </div>
                <div>
                 <img className="w-full mr-2" src={bannerImage} alt=""/> 
                </div>
            </div>
        </div>
    );
};

export default Home;