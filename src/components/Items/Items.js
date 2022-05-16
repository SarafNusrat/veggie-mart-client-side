import React from 'react';
import useItems from '../../hooks/useItems';
import Item from '../../components/Item/Item'

const Items = () => {
    const [items, setItems] = useItems();
    
    return (
        <div className='grid sm:grid-cols-3 grid-cols-1 justify-items-center gap-1'>
        {
            items.map(item => <Item
                 key = {item._id}
                 item = {item}
            ></Item>)
        }
     </div>
    );
};

export default Items;
