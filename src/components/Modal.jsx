import React, { useState } from 'react';
import { toast } from "react-toastify";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Spinner, Input } from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
import { submitForm } from '../redux/formActions';

const Modal = ({ show, onClose }) => {
    const loading = useSelector(state => state.form.loading);
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.name.trim() || !formData.email.trim()) {
            toast.error('Please enter both name and email.');
            onClose()
            return;
        }
        
        dispatch(submitForm(formData.email,formData.name)).then((resp) => {
            console.log(resp)
            toast.success('Email added successfully');
            setFormData({
                name: '',
                email: ''
            });
            onClose()
        }).catch((error) => {
            toast.error(error.message);
            setFormData(prevData => ({
                ...prevData,
                email: ''
            }));
            onClose()
        });
    };
    

    return (
        <Dialog open={show} handler={onClose}>
            <DialogHeader>Join Waitlist</DialogHeader>
            <DialogBody>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            color="lightBlue"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email Address"
                            color="lightBlue"
                        />
                    </div>
                    <div className="flex justify-end">
                        <Button
                            variant="text"
                            color="red"
                            onClick={onClose}
                            className="mr-1"
                        >
                            Cancel
                        </Button>
                        <Button variant="gradient" color="green" type="submit">
                            <span>{loading ? <Spinner /> : 'Join Waitlist'}</span>
                        </Button>
                    </div>
                </form>
            </DialogBody>
        </Dialog>
    );
};

export default Modal;
