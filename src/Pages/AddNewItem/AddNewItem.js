import React from 'react';
import { Helmet } from 'react-helmet-async';
import vegBasket from '../../Images/Veg Basket.png'
import { useForm } from "react-hook-form";

const AddNewItem = () => {
    const { addService, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Helmet>
                <title>Add New Item - Veggie Mart</title>
            </Helmet>
            <div className="px-1 ml-8 mt-4">
                <h4 className="font-bold text-center sm:text-6xl text-4xl mt-4 pt-4 mb-2 text-orange-600">VE<span className="italic">GG</span>IE MART</h4>
            </div>

            <div className="rounded grid grid-cols-1 sm:grid-cols-2 gap-2 ml-16">
                <div>
                    <img className=" align-middle w-full mt-24 mr-2" src={vegBasket} alt="" />
                </div>

                <div className="hero min-h-screen bg-base-100 hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                        <p className="text-center bg-orange-50 sm:text-4xl text-2xl mb-2 mt-4 text-orange-500">WHAT'S<span className='text-green-700'> NEW?</span></p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter a valid name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder="please enter an image url" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" placeholder="Enter a short description for the product" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Enter price per kg" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" placeholder="Enter quantity in kg" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <input type="text" placeholder="Enter supplier name" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default AddNewItem;