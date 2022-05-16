import React from 'react';
import useItems from '../../hooks/useItems';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';

const ManageInventoryItems = () => {
    const [manageInventoryItems, setManageInventoryItems] = useItems();
    return (
        <div className='grid sm:grid-cols-3 grid-cols-1 justify-items-center gap-1'>
        {
            manageInventoryItems.map(manageInventoryItem => <ManageInventoryItem
                 key = {manageInventoryItem._id}
                 manageInventoryItem = {manageInventoryItem}
            ></ManageInventoryItem>)
        }
        </div>
    );
};

export default ManageInventoryItems;

