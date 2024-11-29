import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Input from './common/Input'
import Button from './common/Button'

const CreateUser = ({ setShowModel }) => {
    return (
        <div className='bg-black/75 p-3   transition-all ease-in-out duration-75   inset-0 fixed  z-10  flex items-center justify-center'>
            <div className='bg-white max-w-lg  rounded-lg blur-none shadow-md p-6 overflow-y-auto max-h-96 relative'>
                <button
                    className='absolute top-2 right-2 text-xl'
                    onClick={() => setShowModel(false)}
                >
                    <FaTimes />
                </button>
                <h1 className='text-base font-semibold text-gray-900'>
                    Create User
                </h1>
                <Input
                    type='text'
                    placeholder='Name'
                />
                <input
                    type='text'
                    placeholder='Email'
                    className='border border-gray-200 w-full p-2 mt-2'
                />
                <input
                    type='text'
                    placeholder='Phone'
                    className='border border-gray-200 w-full p-2 mt-2'
                />
                <input
                    type='text'
                    placeholder='Phone'
                    className='border border-gray-200 w-full p-2 mt-2'
                />
                <input
                    type='text'
                    placeholder='Phone'
                    className='border border-gray-200 w-full p-2 mt-2'
                />
                <input
                    type='text'
                    placeholder='Phone'
                    className='border border-gray-200 w-full p-2 mt-2'
                />
                <input
                    type='text'
                    placeholder='Phone'
                    className='border border-gray-200 w-full p-2 mt-2'
                />
                <input
                    type='text'
                    placeholder='Phone'
                    className='border border-gray-200 w-full p-2 mt-2'
                />
                <input
                    type='text'
                    placeholder='Phone'
                    className='border border-gray-200 w-full p-2 mt-2'
                />
                <input
                    type='text'
                    placeholder='Phone'
                    className='border border-gray-200 w-full p-2 mt-2'
                />
                <input
                    type='text'
                    placeholder='Phone'
                    className='border border-gray-200 w-full p-2 mt-2'
                />
                <input
                    type='text'
                    placeholder='Phone'
                    className='border border-gray-200 w-full p-2 mt-2'
                />
                <input
                    type='text'
                    placeholder='Phone'
                    className='border border-gray-200 w-full p-2 mt-2'
                />
                <input
                    type='text'
                    placeholder='Phone'
                    className='border border-gray-200 w-full p-2 mt-2'
                />
                <input
                    type='text'
                    placeholder='Phone'
                    className='border border-gray-200 w-full p-2 mt-2'
                />
                <Button></Button>
                {/* <button className='bg-primary hover:bg-blue-500 text-white p-2 mt-4 w-full'>Create User</button> */}
            </div>
        </div>
    )
}

export default CreateUser