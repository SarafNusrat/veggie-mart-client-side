import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>Blogs - Veggie Mart</title>
            </Helmet>

            <div>
                <h2 className='text-4xl font-bold mt-8 mb-7 text-center text-orange-600'>QUESTION ANSWERS</h2>
                <div className='flex flex-col mx-auto border-blue-500 border-opacity-25 gap-2 mt-4'>

                    <div className='border-1 p-5 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-orange-100'>
                        <h2 className='font-bold text-orange-600'>1. When should you use nodejs and when should you use mongodb?</h2>
                        <br></br>
                        <p>Nodejs is a javascript engine that is used to create web applications. Whereas, MongoDB is a database engine that is used to store, filter data. 
                        </p>
                        <p>These two are not substitute for each other. There are many web applications that run within nodeJs, then they use MongoDB for storing data within that application.  
                        </p>
                        <p>Use Nodejs when you want to create a stand-alone program. Use MongoDB when you need to form an efficient database. 
                        </p>
                    </div>

                    <div className='border-1 p-5 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-sky-100'>
                        <h2 className='font-bold text-orange-600'>2. Differences between sql and nosql databases.</h2>
                        <br></br>
                        <p>SQL uses structured query language, while NoSQL has dynamic schemas.</p>
                        <p>SQL database is relational, while NoSQL database is non-relational.</p>
                        <p>SQL database is vertically scalable, but NoSQL is horizontally scalable.</p>
                        <p>SQL is a table format database, while NoSQL is document based.</p>
                        <p>SQL is better for multi-row transactions, but NoSQL is better for unstructured data.</p>
                    </div>

                    <div className='border-1 p-5 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-orange-100'>
                        <h2 className='font-bold text-orange-600'>3. What is the purpose of jwt and how does it work.</h2>
                        <br></br>
                        <p>JWT means JSON Web Token. It is used to share security information between client and server.</p>
                        <p>JWT includes a set of claims which are used to transmit information between client and server. It uses a cryptographic algorithm to ensure that the claims can not be altered after the token is issued.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;