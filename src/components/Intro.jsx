import React, { useState } from 'react';
import JoinWaitListButton from './JoinWaitListButton';
import Modal from './Modal';

const Intro = () => {
    const [showModal, setShowModal] = useState(false);

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };


    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly mt-20">
            {/* Text Section */}
            <div className="max-w-md lg:w-3/5 px-4 mb-10">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                    Revolutionary Remote <span className="text-customOrange">Healthcare</span> Service in Ghana
                </h2>
                <p className="mb-4">
                    Welcome to Tonitel, where healthcare meets convenience and accessibility. Be among the first to experience our groundbreaking healthcare platform by joining our exclusive waitlist today.
                </p>
                <JoinWaitListButton onClick={handleToggleModal} />
            </div>
            {/* Image Section */}
            <div className="w-4/5 lg:w-2/5 px-4 md:h-[400px] lg:h-auto mt-20 md:mt-0">
                <img src="/ctx1.png" alt="Your Alt Text" className="w-full h-full" />
            </div>


            <Modal show={showModal} onClose={handleToggleModal} />
        </div>
    );
};

export default Intro;
