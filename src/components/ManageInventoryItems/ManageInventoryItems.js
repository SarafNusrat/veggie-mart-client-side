import React, { useEffect, useState } from 'react';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';

const ManageInventoryItems = () => {
    const [manageInventoryItems, setManageInventoryItems] = useState([]);
    const [reload, setIsReload] = useState(true);

    useEffect( () => {
        fetch('http://localhost:5000/item')
        .then(res => res.json())
        .then(data => setManageInventoryItems(data));
    }, [reload]);

    return (
        <div className='grid sm:grid-cols-3 grid-cols-1 justify-items-center gap-1'>
        {
            manageInventoryItems.map(manageInventoryItem => <ManageInventoryItem
                 key = {manageInventoryItem._id}
                 manageInventoryItem = {manageInventoryItem}
                 reload = {reload}
                 setIsReload = {setIsReload}
            ></ManageInventoryItem>)
        }
        </div>
    );
};

export default ManageInventoryItems;

