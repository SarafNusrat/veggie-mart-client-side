import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../../hooks/useItems';

const ItemDetail = () => {
    const { id } = useParams();

    const [details, setDetails] = useState({});

    useEffect ( () => {
        const url = `http://localhost:5000/item/${id}`
        fetch(url)
        .then (res => res.json())
        .then (data => setDetails(data))
    }, [])
    
    return (
        <div>
           <h2>friend: {id}</h2>
           <h2>name: {details.name}</h2>
           <p>description: {details.description}</p>
           <p>Image:  <img src={details.img} alt=""/></p>
        </div>
    );
};

export default ItemDetail;
