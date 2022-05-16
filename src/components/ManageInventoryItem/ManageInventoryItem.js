import React from 'react';

const ManageInventoryItem = (props) => {
    const { name, img, description, price, quantity, supplier } = props.manageInventoryItem;

    const handleDeleteBtn= () => {
        
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
                            <button onClick={handleDeleteBtn} className="btn btn-warning">Delete</button>
                        </div>
                    </div>
        </div>
    </div>
    );
};

export default ManageInventoryItem;




