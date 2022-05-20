import React from 'react';
import useItems from '../../hooks/useItems';
import Loading from '../../Pages/Shared/Loading/Loading';
import Item from '../Item/Item';

const HomeItems = (props) => {
    let [items, setItems] = useItems();

    const slicedItem = items.slice(0, 6);

    return (
        <div>
            <div className='grid sm:grid-cols-3 grid-cols-1 justify-items-center w-auto mt-4 mb-4 gap-1'>
            {
                items.length > 0?
                    slicedItem.map ( item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                    : <Loading></Loading>
            }
            </div>
        </div>

    );
};

export default HomeItems;
