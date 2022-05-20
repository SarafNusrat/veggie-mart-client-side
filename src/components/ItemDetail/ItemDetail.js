import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Item from '../Item/Item';

const ItemDetail = () => {
    const { id } = useParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [details])

    const handleDeliveredButton = event => {
        event.preventDefault();
        const quantity = details.quantity;
        console.log('The quantity is: ', quantity);

        const updatedQuantity = quantity - 1;
        details.quantity = updatedQuantity;
        const updatedItem = {
            quantity: updatedQuantity
        }
        console.log('updatedItem is ', updatedItem);
        console.log('data is ', details);
        setDetails(details);

        // send data to server 
        const url = `http://localhost:5000/item/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                event.target.reset();
                alert('quantity updating successfully');
            })
    }

    const handleRestockButton = event => {
        event.preventDefault();
        const restock = parseInt(event.target.restock.value);

        const prevQuantity = details.quantity;

        const updatedQuantity = parseInt(prevQuantity + restock);
        const updatedItem = {
           quantity: updatedQuantity
        }
        
        setDetails(details);

        // send data to server 
        const url = `http://localhost:5000/item/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                event.target.reset();
                alert('quantity updating successfully');
            })
    }

    const navigate = useNavigate();

    const handleManageInventoriesBtn = () => {
        const path = '/inventory';
        navigate(path);
    }


    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 align-middle mx-auto'>
                <div>
                    <img className="w-3/4 ml-8 mt-2" src={details.img} alt="" />
                </div>
                <div className="px-8 mr-8 mt-2 align-middle">
                    <div className="py-4">
                        <h4 className='text-center'>ITEM ID: {id}</h4>
                        <h4 className="font-bold text-center sm:text-6xl text-4xl mt-4 pt-4 mb-2 text-orange-600">{details.name}</h4>
                        <p className='text-center text-1xl mb-4'>{details.description}</p>
                        <div className='items-center justify-items-center'>
                            <div className='text-2xl bg-orange-50 text-green-800 font-bold pt-1 pb-6'>
                                <p className='text-center mt-8'>PRICE: {details.price}</p>
                                <p className='text-center'>QUANTITY (IN KG): {details.quantity}</p>
                                <h4 className='text-center'>SUPPLIER: {details.supplier}</h4>
                            </div>
                            <button onClick={handleDeliveredButton} className='ml-52 justify-items-center btn btn-warning items-center p-4 mt-4'>DELIVERED</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="justify-items-center flex align-middle justify-center gap-2">
                <div>
                    <p className='rounded block mb-2 p-2 border-black text-1xl font-bold text-center text-orange-600'>Restock The Items (in kg)</p>
                </div>
                <form className='flex gap-2' onSubmit={handleRestockButton}>
                        <input type="text" name="restock" id="large-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        <input className="rounded block mb-2 bg-orange-600 p-2 border-1 border-black text-1xl font-bold text-center text-white" type="submit" value="RESTOCK"/>
                </form>
            </div>
            <div className="relative mt-8 h-30 w-auto">
                    <button onClick={handleManageInventoriesBtn} type="button" className="absolute top-0 right-8 ml-4 h-12 w-38 px-6 py-2.5 text-green-600 text-1xl underline leading-tight uppercase rounded hover:bg-yellow-400 hover:shadow-lg active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out animate-bounce bg-grey-light text-grey-darkest font-bold inline-flex items-center">MANAGE INVENTORIES</button>
            </div>
        </div>

    );
};

export default ItemDetail;
