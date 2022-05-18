import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Item.css';

const Item = (props) => {
    const { name, _id, img, description, price, quantity, supplier } = props.item;

    const navigate = useNavigate();

    const showItemDetail = (id) => {
            navigate(`/inventory/${id}`)
    }

    return (
        <div>
            <div className="pt-1 mx-auto ml-6 h-auto card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10">
                            <img src={img} alt="items" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-orange-600 font-bold">{name}</h2>
                            <p className='text-gray-500'>{description}</p>
                            <p className='text-orange-500 font-bold pb-0.25'>{price}</p>
                            <span className='text-gray-700'>[{quantity}]</span>
                            <h4 className='text-green-800 font-bold'>{supplier}</h4>
                            <div className="card-actions">
                                <button onClick={() => showItemDetail(_id)}className="btn btn-warning">Update</button>
                            </div>
                        </div>
            </div>
        </div>
    );
};

export default Item;

