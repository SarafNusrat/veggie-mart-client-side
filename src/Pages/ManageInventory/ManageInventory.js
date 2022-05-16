import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import ManageInventoryItems from '../../components/ManageInventoryItems/ManageInventoryItems';

const ManageInventory = () => {
    const navigate = useNavigate(); 

    const handleAddNewItem = () => {
         const path = '/addNewItem';
         navigate(path);
    }

    return (
        <div>
            <Helmet>
                <title>Manage Inventory - Veggie Mart</title>
            </Helmet>
            <div class="relative h-30 w-auto">
                <button onClick={handleAddNewItem} type="button" class="absolute top-0 right-2 h-12 w-38 px-6 py-2.5 bg-green-600 text-white text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-500 hover:shadow-lg active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out animate-bounce bg-grey-light text-grey-darkest font-bold inline-flex items-center">+ ADD NEW ITEM</button>
            </div>

            <h4 className="font-bold text-center sm:text-5xl text-3xl mt-6 pt-6 mb-2 text-orange-600">VE<span className="italic">GG</span>IE MART</h4>
            <p className="text-center sm:text-3xl text-2xl mb-2 mt-4 text-black-100">All INVENTORY ITEMS</p>
            <ManageInventoryItems></ManageInventoryItems>
        </div>
    );
};

export default ManageInventory;