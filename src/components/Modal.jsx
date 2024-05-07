import React,{useState} from 'react';
import { toast } from "react-toastify";
import Spinner from './Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { submitForm } from '../redux/formActions';

const Modal = ({ show, onClose }) => {
    const loading = useSelector(state => state.form.loading);
    const [ email, setEmail ] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitForm(email)).then((resp)=>{
            console.log(resp)
            
                toast.success('Email added successfully')
                setEmail('')
            
        }).catch((error)=>{
            toast.error(error.message,);
              setEmail('')
        });
    };

    return (
        <div id="default-modal" tabIndex="-1" aria-hidden="true" className={`fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 ${show ? 'block' : 'hidden'}`}>
            <div className="relative p-4 w-full max-w-2xl">
                <div className="relative bg-white rounded-lg shadow-lg">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">Join the Waitlist</h3>
                        <button type="button" className="text-gray-400 hover:text-gray-900 rounded-lg w-8 h-8 focus:outline-none" onClick={onClose}>
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 12 12M1 13 13 1"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 rounded-lg border-gray-400 focus:border-customOrange focus:ring focus:ring-customOrange-dark focus:ring-opacity-50" placeholder="Your email address" required />
                            </div>
                            <div className="flex justify-end">
                                <button type="submit" className="block text-white bg-customOrange p-2 rounded-3xl focus:ring-4 w-40" disabled={loading}>
                                    {loading ? <Spinner /> : 'Join Waitlist'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
