import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DrawerContent } from './Drawer'
import Modal from './Modal'
import JoinWaitListButton from './JoinWaitListButton'

const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const [open, setOpen] = useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };


    return (
        <>
            <nav className="bg-white border-gray-200 shadow-md text-black sticky top-0 z-50">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/logo.png" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Tonitel</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <div className="hidden md:block">
                            <JoinWaitListButton onClick={handleToggleModal} />
                        </div>



                        <button onClick={openDrawer} data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                            <Link to={'/'}>
                                <span className="block py-2 px-3 md:p-0 text-black" >Home</span>
                            </Link>
                            <Link to={'/about'}>
                                <span className="block py-2 px-3 md:p-0 text-black" >About</span>
                            </Link>
                            <Link to={'/contact'}>
                                <span className="block py-2 px-3 md:p-0 text-black" aria-current="page">Contact Us</span>
                            </Link>

                        </ul>
                    </div>
                </div>
                <Modal show={showModal} onClose={handleToggleModal} />

            </nav>
            <DrawerContent open={open} onClose={closeDrawer} />
        </>

    )
}

export default Header