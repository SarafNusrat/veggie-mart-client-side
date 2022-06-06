import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [reload, setIsReload] = useState(true);

    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://serene-refuge-96903.herokuapp.com/myItem?email=${email}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setItems(data))
            setIsLoaded(true);
        }
        getItems();
    }, [user])

    const handleDeleteBtn= _id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://serene-refuge-96903.herokuapp.com/item/${_id}`
        fetch(url, {
              method: 'DELETE', 
          })
          .then(res => res.json())
          .then(data => {
              const remaining = items.filter(item => item._id !== _id);
              setItems(remaining);
          });  
   }
   }

    return (
        <div className='grid sm:grid-cols-3 grid-cols-1 justify-items-center gap-1'>
            {
                isLoaded ?
                    <>
                        {
                            items.map(item =>
                            <>
                                <div className="pt-1 mx-auto ml-6 h-auto card w-96 bg-base-100 shadow-xl">
                                    <figure className="px-10">
                                        <img src={item.img} alt="items" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-orange-600 font-bold">{item.name}</h2>
                                        <p className='text-gray-500'>{item.description}</p>
                                        <p className='text-orange-500 font-bold pb-0.25'>{item.price}</p>
                                        <span className='text-gray-700'>{item.quantity}</span>
                                        <h4 className='text-green-800 font-bold'>{item.supplier}</h4>
                                        <div className="card-actions">
                                            <button onClick={() => handleDeleteBtn(item._id)}  className="btn btn-warning">Delete</button>
                                        </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </>
                    :
                    <>
                        <Loading></Loading>
                    </>
            }
        </div>
    );
};

export default MyItem;