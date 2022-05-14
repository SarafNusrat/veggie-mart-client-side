import React from 'react';
import { Helmet } from 'react-helmet-async';

const AddNewItem = () => {
    return (
        <div>
            <Helmet>
                <title>Add New Item - Veggie Mart</title>
            </Helmet>
            <h2>Add new item here</h2>
        </div>
    );
};

export default AddNewItem;