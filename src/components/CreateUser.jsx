import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Input from './common/Input';
import Button from './common/Button';

const CreateUser = ({ setShowModel, userData, setUserData, handleSubmit }) => {
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });


    }

    return (
        <div className="bg-black/75 p-3 transition-all ease-in-out duration-75 inset-0 fixed z-10 flex items-center justify-center">
            <div className="bg-white max-w-lg rounded-lg shadow-md p-6 overflow-y-auto max-h-96 relative">
                {/* Close Button */}
                <button
                    className="absolute top-2 right-2 text-xl"
                    onClick={() => setShowModel(false)}
                >
                    <FaTimes />
                </button>

                {/* Title */}
                <h1 className="text-lg font-semibold text-gray-900 mb-4">Create User</h1>

                {/* Form */}
                <div className="grid grid-cols-1  sm:grid-cols-2   gap-4">
                    {/* Name */}
                    <Input
                        name="name"
                        type="text"
                        onChange={handleChange}
                        placeholder="Name"
                    />

                    {/* Email */}
                    <Input
                        name="email"
                        type="email"
                        onChange={handleChange}
                        placeholder="Email"
                    />

                    {/* Phone */}
                    <Input
                        name="phone"
                        type="number"
                        onChange={(e) => console.log(e.target.value)}
                        placeholder="Phone"
                    />

                    {/* Website */}
                    <Input
                        name="website"
                        type="text"
                        onChange={(e) => console.log(e.target.value)}
                        placeholder="Website"
                    />

                    {/* Address (Spans 2 Columns) */}
                    <div className=" sm:col-span-2 col-span-1">
                        <textarea
                            name='address'
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            onChange={(e) => console.log(e.target.value)}
                            placeholder="Address"
                            rows={3}
                        ></textarea>
                    </div>
                </div>

                {/* Button (Spans 2 Columns) */}
                <div className="col-span-2 mt-4 flex justify-center">
                    <Button onClick={handleSubmit}>Create</Button>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;
