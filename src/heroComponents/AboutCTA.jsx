import React from 'react';

const AboutCtx = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly my-20">
            <div className="hidden md:block max-w-md lg:w-1/2 px-4">
                <img src="/about_ctx.png" alt="Your Alt Text" className="w-full min-h-min" />
            </div>

            <div className=" lg:w-1/2 px-4 mt-5 text-justify mx-2">
                <h2 className="text-3xl font-bold mb-4">About us</h2>
                <p className="mb-4">Imagine a Ghana where quality healthcare isn't a privilege, but a reality for every citizen. Tonitel makes this vision a click away. Our innovative platform connects you with qualified doctors for secure video consultations, all from the comfort of your home or office.
                    But Tonitel goes beyond convenience. We understand comprehensive care. That's why we seamlessly integrate local pharmacies and labs, allowing you to access medication and diagnostics with just a few taps. It's a one-stop shop for your health needs.
                    Our mission is bolder than just service – it's empowerment. We believe in putting you in control of your well-being. Through education and early intervention, we're building a healthier Ghana, one patient at a time.
                </p>
                <p className='mb-4'>
                    <span className='font-bold'>The Tonitel Difference:</span> <br />
                    We provide end-to-end care, offering video consultations, prescriptions, and lab tests – all at your fingertips. We're locally focused, partnering with Ghanaian pharmacies and empowering nurses, strengthening the healthcare ecosystem. Tonitel is about empowering patients – we equip you with the knowledge and resources to take charge of your health.
                    Join the Tonitel Journey. Backed by passionate healthcare professionals, technologists, and leaders, we're ready to revolutionize healthcare access across Africa. Partner with us to build a future where quality healthcare is a right, not a luxury.
                    Tonitel: Healthcare for all, tailored to you. Whether you're a busy professional, someone with limited mobility, or simply seeking convenient and affordable care, we cater to your unique needs. Make your health a priority, not an afterthought.
                </p>
            </div>
        </div>
    );
};

export default AboutCtx;
