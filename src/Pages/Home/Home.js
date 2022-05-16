import React from 'react';
import bannerImage from '../../../src/Images/Banner2.jpg';
import icon1 from '../../../src/Images/icons/clock icon.png';
import icon2 from '../../../src/Images/icons/loc icon.png';
import icon3 from '../../../src/Images/icons/call icon.png';
import HomeItems from '../../components/HomeItems/HomeItems';
import commonImage from '../../Images/flat-top-view-pasta-shells-made-durum-wheat-red-cherry-tomatoes-basil-garlic-preparing-italian-dish-vegetables-spices-yellow-background-cooking-ingredients-detox-food.jpg'
import commonImage2 from '../../Images/healthy-vegetables-used-cooking-purposes-ripe-red-cherry-tomatoes-sprouts-asparagus-white-champignons-peppercorns-isolated-yellow-background-products-from-grocery-store-market.jpg'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleManageInventoriesBtn = () => {
        const path = '/inventory';
        navigate(path);
    }
    return (
        <div>
            {/* Banner */}
            <div className="rounded grid grid-cols-1 sm:grid-cols-2 gap-2 border-l-4 border-orange-200 ml-8">
                <div className="px-1 ml-8 mt-12">
                    <h4 className="font-bold text-center sm:text-6xl text-4xl mt-16 pt-16 mb-2 text-orange-600">VE<span className="italic">GG</span>IE MART</h4>
                    <p className="text-center sm:text-5xl text-3xl mb-2 mt-4 text-black-100">The Inventory</p>
                </div>
                <div>
                    <img className="w-full mr-2" src={bannerImage} alt="" />
                </div>
            </div>

            {/* Extra section 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center mx-40 mt-8 mb-12 gap-3">
                <div className="card w-64 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-8">
                        <img src={icon1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">11:00 am - 8:00 pm</h2>
                        <p>Working Hours</p>
                    </div>
                </div>
                <div className="card w-64 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={icon2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">57 Baily Rd, 1217</h2>
                        <p>Get Directions</p>
                    </div>
                </div>
                <div className="card w-64 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={icon3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">(+88) 0175 000 0000</h2>
                        <p>Call Us Now!</p>
                    </div>
                </div>
            </div>

            {/* 6 Items */}
            <div>
                <div>
                    <h4 className="font-bold text-center sm:text-5xl text-3xl mt-1 pt-6 mb-2 text-orange-600">INVENTORY ITEMS</h4>
                </div>
                <HomeItems></HomeItems>
                {/* <button class="text-pink-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                >
                    With Text
                </button> */}
                <div class="relative mt-8 h-30 w-auto">
                    <button onClick={handleManageInventoriesBtn} type="button" class="absolute top-0 right-8 ml-4 h-12 w-38 px-6 py-2.5 text-green-600 text-1xl underline leading-tight uppercase rounded hover:bg-yellow-500 hover:shadow-lg active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out animate-bounce bg-grey-light text-grey-darkest font-bold inline-flex items-center">MANAGE INVENTORIES</button>
                </div>
            </div>

            {/* Extra Section 2 */}
            <div>
                <div>
                    <div>
                        <h4 className="font-bold mt-24 mb-8 text-center sm:text-4xl text-3xl pt-6 text-orange-600">WHAT OUR SUPPLIERS SAY</h4>
                    </div>
                </div>
                <div className="carousel w-full bg-red-500">
                    <div id="item1" className="carousel-item w-full">
                        {/* Supplier 1 */}
                        <div className="max-w-lg px-8 py-4 h-52 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 w-full">
                            <div className="flex justify-center -mt-16 md:justify-end">
                                <img className="object-cover w-20 h-20 border-2 border-blue-700 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={commonImage}></img>
                            </div>
                            <p className="mt-4 text-gray-600 dark:text-gray-200">"It's been 5 years since we started our partnership with Veggie Mart! And the journey has been nothing but a strong and ethical bond between us!"</p>
                            <div className="flex justify-end mt-4">
                                <h2 className="text-xl font-medium text-blue-500 dark:text-blue-300">UNIMART</h2>
                            </div>
                        </div>
                    </div>

                    <div id="item2" className="carousel-item w-full">
                        {/* Supplier 2 */}
                        <div className="max-w-lg px-8 py-4 h-52 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 w-full">
                            <div className="flex justify-center -mt-16 md:justify-end">
                                <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={commonImage2}></img>
                            </div>

                            <p className="mt-2 text-gray-600 dark:text-gray-200">"Veggie Mart is the most trusted business partner we have. The honesty and legacy they have been showing is praiseworthy. We wish you all the best!"</p>

                            <div className="flex justify-end mt-4">
                                <h2 className="text-xl font-medium text-blue-500 dark:text-blue-300" alt="">KAZI FARM</h2>
                            </div>
                        </div>
                    </div>

                    <div id="item3" className="carousel-item w-full">
                        {/* Supplier 3 */}
                        <div className="max-w-lg px-8 py-4 h-52 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 w-full">
                            <div className="flex justify-center -mt-16 md:justify-end">
                                <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={commonImage}></img>
                            </div>

                            <p className="mt-2 text-gray-600 dark:text-gray-200">"Business doesn't work well if you are not honest and transparent towards your customer. This is what Veggie Mart proves everyday!"</p>

                            <div className="flex justify-end mt-4">
                                <h2 className="text-xl font-medium text-blue-500 dark:text-blue-300">VEG ASIA</h2>
                            </div>
                        </div>
                    </div>

                    <div id="item4" className="carousel-item w-full">
                        {/* Supplier 4 */}
                        <div className="max-w-lg px-8 py-4 h-52 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 w-full">
                            <div className="flex justify-center -mt-16 md:justify-end">
                                <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={commonImage2}></img>
                            </div>

                            <p className="mt-2 text-gray-600 dark:text-gray-200">Veggie Mart has been doing business for the customers since many years now. They never compromise in terms of quality!</p>

                            <div className="flex justify-end mt-4">
                                <h2 className="text-xl font-medium text-blue-500 dark:text-blue-300">FARMERS AGRO</h2>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs bg-red-500">1</a>
                    <a href="#item2" className="btn btn-xs bg-red-500">2</a>
                    <a href="#item3" className="btn btn-xs bg-red-500">3</a>
                    <a href="#item4" className="btn btn-xs bg-red-500">4</a>
                </div>
            </div>
        </div>
    );
};

export default Home;