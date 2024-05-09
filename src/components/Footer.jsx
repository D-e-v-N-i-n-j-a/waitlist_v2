import React from 'react'
import { FaTwitter, FaLinkedin, FaTelegram } from 'react-icons/fa';



const Footer = () => {
    return (


        <footer className="bg-white rounded-lg  shadow-md m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/logo__.png" className="h-[40px]" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tonitel</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">&copy; 2023-2024 Tonitel. All rights reserved.</span>
                    <div className="flex gap-4">
                        <a href="#" className="text-gray-500 hover:text-blue-400">
                            <FaTwitter className='text-xl'/>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-400">
                            <FaLinkedin className='text-xl'/>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-400">
                            <FaTelegram className='text-xl'/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>


    )
}

export default Footer