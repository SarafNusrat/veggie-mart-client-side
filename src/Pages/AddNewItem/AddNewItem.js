import React from 'react';
import { Helmet } from 'react-helmet-async';
import vegBasket from '../../Images/Veg Basket.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddNewItem = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    
    const handleAddItem = (event) => {
          event.preventDefault();
          const name = event.target.name.value;
          const email = event.target.email.value;
          const img = event.target.img.value;
          const description = event.target.description.value;
          const price = event.target.price.value;
          const quantity = event.target.quantity.value;
          const supplier = event.target.supplier.value;

          const item = {name, img, email, description, price, quantity, supplier};
          

          // post data to server 
          fetch('https://serene-refuge-96903.herokuapp.com/item', {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(item),
          })
          .then(res => res.json())
          .then(data => {
              alert('New item added successfully!!');
              event.target.reset();
          })
    }

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
                <form onSubmit={handleAddItem}>
                    
                <div className="hero min-h-screen bg-base-100 hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                        <p className="text-center bg-orange-50 sm:text-4xl text-2xl mb-2 mt-4 text-orange-500">WHAT'S<span className='text-green-700'> NEW?</span></p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email Address</span>
                                </label>
                                <input type="text" name="email" placeholder="Enter your email address" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Item Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter a valid name" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" name="img" placeholder="please enter an image url" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Enter a short description for the product" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Enter price per kg" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" name="quantity" placeholder="Enter quantity in kg" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <input type="text"  name="supplier" placeholder="Enter supplier name" className="input input-bordered" required/>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
                 
                </form>

            </div> 
        </div>
    );
};

export default AddNewItem;