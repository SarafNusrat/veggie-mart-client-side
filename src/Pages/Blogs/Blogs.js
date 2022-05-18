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

                    <div className='border-1 p-5 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-sky-100'>
                        <h2 className='font-bold text-orange-600'>
                            1. Difference between javascript and nodejs</h2>
                        <br></br>
                        <p>Authentication means to verify a person or a user. Whereas, authorization means to verify the accessibility of that user over an application, files or etc.</p>
                    </div>

                    <div className='border-1 p-5 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-orange-100'>
                        <h2 className='font-bold text-orange-600'>2. When should you use nodejs and when should you use mongodb?</h2>
                        <br></br>
                        <p>I am using firebase becuase it is easy to use and the SDK provides methods that allow users to sign in with Google, Facebook, Twitter and similar social accounts. Also, you will have access to the firebase database/cloud functionn, UI library and other services.
                            Some other options are: Parse: Open Source Backend Platform;
                            Back4app: Parse Hosting Platform;
                            Kinvey: Mobile Backend as a Service (mBaaS) for the Enterprise;
                            Backendless: Mobile Backend and API Services Platform;
                            Kuzzle: Backend for web, hybrid, or native mobile apps and IoT projects.
                        </p>
                    </div>

                    <div className='border-1 p-5 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-sky-100'>
                        <h2 className='font-bold text-orange-600'>3. Differences between sql and nosql databases.</h2>
                        <br></br>
                        <p>Some other services provided by firebase are: Cloud Firestore.
                            Cloud Functions.
                            Authentication.
                            Hosting.
                            Cloud Storage.
                            Google Analytics.
                            Predictions.
                            Cloud Messaging and etc.</p>
                    </div>

                    <div className='border-1 p-5 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-orange-100'>
                        <h2 className='font-bold text-orange-600'>4. What is the purpose of jwt and how does it work.</h2>
                        <br></br>
                        <p>Some other services provided by firebase are: Cloud Firestore.
                            Cloud Functions.
                            Authentication.
                            Hosting.
                            Cloud Storage.
                            Google Analytics.
                            Predictions.
                            Cloud Messaging and etc.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;