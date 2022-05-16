import React from 'react';
import useItems from '../../hooks/useItems';
import Item from '../Item/Item';
import ItemDetail from '../ItemDetail/ItemDetail';

const HomeItems = (props) => {
    let [items, setItems] = useItems();

    const slicedItem = items.slice(0,6);

    return (
        <div>
            <div className='grid sm:grid-cols-3 grid-cols-1 justify-items-center w-auto mt-4 mb-4 gap-1'>
            {
            slicedItem.map(item => <Item
                 key = {item._id}
                 item = {item}
            ></Item>)
            }   
            </div>  
        </div>
        
    );
};

export default HomeItems;
