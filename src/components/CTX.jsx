import React from 'react';

const CTX = () => {
    return (
        <div className="flex flex-col items-center justify-center my-60">
            <h2 className="text-3xl font-bold mb-4">What we offer</h2>
            <p className="text-center mx-10">
                By joining our waitlist, you gain exclusive early access to our platform and its features.
            </p>
            <div className="flex flex-wrap justify-center mt-10">
                <div className="max-w-sm mx-2 my-4 border border-gray-200 rounded-lg bg-white shadow-md">
                    <div className="mx-5 mt-2">
                        <a href="#">
                            <img className="rounded-t-lg" src="/img3.png" alt="" />
                        </a>
                    </div>
                    <div className="p-5">
                        <a href="#">
                            <h6 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-black">Access to top health professionals</h6>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Connect with experienced doctors who are dedicated to providing quality care remotely. Receive expert medical advice, diagnosis, and prescriptions from the comfort of your home.
                        </p>
                    </div>
                </div>

                <div className="max-w-sm mx-2 my-4 border border-gray-200 rounded-lg bg-white shadow-md">
                    <div className="mx-5 mt-2">
                        <a href="#">
                            <img className="rounded-t-lg" src="/img2.png" alt="" />
                        </a>
                    </div>
                    <div className="p-5">
                        <a href="#">
                            <h6 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-black">Seamless Medication Delivery</h6>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Say goodbye to the hassle of visiting pharmacies. Our partnered pharmacies will deliver your prescribed medications directly to your doorstep, ensuring you never run out of essential healthcare supplies.
                        </p>
                    </div>
                </div>

                <div className="max-w-sm mx-2 my-4 border border-gray-200 rounded-lg bg-white shadow-md">
                    <div className="mx-5 mt-2">
                        <a href="#">
                            <img className="rounded-t-lg" src="/img1.png" alt="" />
                        </a>
                    </div>
                    <div className="p-5">
                        <a href="#">
                            <p className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-black">Convenient Laboratory Testing:</p>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Schedule and receive essential diagnostic tests without the need to leave your home. Our platform connects you to trusted laboratories, making healthcare more accessible and efficient.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTX;
