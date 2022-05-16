import React from 'react';
import { Helmet } from 'react-helmet-async';
import vegBasket from '../../Images/Veg Basket.png'

const AddNewItem = () => {
    return (
        <div>
            <Helmet>
                <title>Add New Item - Veggie Mart</title>
            </Helmet>
            <div className="px-1 ml-8 mt-4">
                <h4 className="font-bold text-center sm:text-6xl text-4xl mt-4 pt-4 mb-2 text-orange-600">VE<span className="italic">GG</span>IE MART</h4>
                <p className="text-center sm:text-4xl text-2xl mb-2 mt-4 text-black-100">WHAT'S<span className='text-green-700'> NEW?</span></p>
            </div>
            <div className="rounded grid grid-cols-1 sm:grid-cols-2 gap-2 ml-8">
                <div>
                    <img className="w-full mr-2" src={vegBasket} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AddNewItem;