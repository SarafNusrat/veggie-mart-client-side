import React from 'react';
import bannerImage from '../../../src/Images/Banner2.jpg';
import icon1 from '../../../src/Images/icons/clock icon.png';
import icon2 from '../../../src/Images/icons/loc icon.png';
import icon3 from '../../../src/Images/icons/call icon.png';

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <div className="rounded grid grid-cols-1 sm:grid-cols-2 gap-2 border-l-4 border-orange-200 ml-8">
               <div className="px-1 ml-8 mt-12">
                  <h4 className="font-bold text-center sm:text-6xl text-4xl mt-16 pt-16 mb-2 text-orange-600">VE<span class="italic">GG</span>IE MART</h4>
                  <p className="text-center sm:text-5xl text-3xl mb-2 mt-4 text-black-100">The Inventory</p> 
                </div>
                <div>
                 <img className="w-full mr-2" src={bannerImage} alt=""/> 
                </div>
            </div>

            {/* Extra section 1 */}
            <div class="grid grid-cols-1 sm:grid-cols-3 justify-items-center mx-40 mt-8 mb-12 gap-3">
                <div class="card w-64 bg-base-100 shadow-xl">
                <figure class="px-10 pt-8">
                    <img src={icon1} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">11:00 am - 8:00 pm</h2>
                    <p>Working Hours</p>
                </div>
                </div>
                <div class="card w-64 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={icon2} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">57 Baily Rd, 1217</h2>
                    <p>Get Directions</p>
                </div>
                </div>
                <div class="card w-64 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={icon3} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">(+88) 0175 000 0000</h2>
                    <p>Call Us Now!</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;