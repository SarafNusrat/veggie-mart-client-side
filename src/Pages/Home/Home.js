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

            {/* Extra Section 2 */}
            <div>
                    <div class="carousel w-full bg-red-500">
        <div id="item1" class="carousel-item w-full">
            {/* Supplier 1 */}
            <div class="max-w-lg px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 w-full">
                <div class="flex justify-center -mt-16 md:justify-end">
                    <img class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"></img>
                </div>

                <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">Design Tools</h2>

                <p class="mt-2 text-gray-600 dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                
                <div class="flex justify-end mt-4">
                    <a href="#" class="text-xl font-medium text-blue-500 dark:text-blue-300">John Doe</a>
                </div>
            </div>
            </div>

            <div id="item2" class="carousel-item w-full">
            {/* Supplier 2 */}
            <div class="max-w-lg px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 w-full">
                <div class="flex justify-center -mt-16 md:justify-end">
                    <img class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"></img>
                </div>

                <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">Design Tools</h2>

                <p class="mt-2 text-gray-600 dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                
                <div class="flex justify-end mt-4">
                    <a href="#" class="text-xl font-medium text-blue-500 dark:text-blue-300" alt="">John Doe</a>
                </div>
            </div>
            </div>

            <div id="item3" class="carousel-item w-full">
            {/* Supplier 3 */}
            <div class="max-w-lg px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 w-full">
                <div class="flex justify-center -mt-16 md:justify-end">
                    <img class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"></img>
                </div>

                <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">Design Tools</h2>

                <p class="mt-2 text-gray-600 dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                
                <div class="flex justify-end mt-4">
                    <a href="#" class="text-xl font-medium text-blue-500 dark:text-blue-300">John Doe</a>
                </div>
            </div>
            </div>

            <div id="item4" class="carousel-item w-full">
            <div class="max-w-lg px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 w-full">
                <div class="flex justify-center -mt-16 md:justify-end">
                    <img class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"></img>
                </div>

                <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">Design Tools</h2>

                <p class="mt-2 text-gray-600 dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                
                <div class="flex justify-end mt-4">
                    <a href="#" class="text-xl font-medium text-blue-500 dark:text-blue-300">John Doe</a>
                </div>
            </div>
        </div> 

                    </div> 
                    <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs bg-red-500">1</a> 
        <a href="#item2" class="btn btn-xs bg-red-500">2</a> 
        <a href="#item3" class="btn btn-xs bg-red-500">3</a> 
        <a href="#item4" class="btn btn-xs bg-red-500">4</a>
                    </div>
            </div>
        </div>
    );
};

export default Home;