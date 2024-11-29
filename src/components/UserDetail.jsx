import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';

const UserDetail = () => {
    const { id } = useParams();
    const { users } = useSelector((state) => state.users);
    const user = users.find((u) => u.id === parseInt(id));

    if (!user) {
        return <div className="text-center p-4 text-gray-600">User not found</div>;
    }
    console.log(user.address);

    return (
        <div className="container mx-auto px-6 py-8">
            {/* Page Title */}
            {/* back button */}
            <div className='flex items-center    gap-4'>

                <Link to="/" className="text-primary mb-4 inline-block">
                    <IoIosArrowBack className='font-bold text-lg' />           </Link>
                <h1 className="text-2xl font-bold text-gray-700 mb-6">User Details</h1>
            </div>

            <div className="">
                {/* Left Card - User Info */}
                <div className="bg-white shadow-md border-t-secondary border-t-4 rounded-lg p-6 max-w-lg mx-auto">
                    <div className="text-center mb-6">
                        {/* User Avatar */}
                        <div className="w-24 h-24 rounded-full mx-auto bg-secondary flex items-center justify-center">
                            <span className="text-4xl font-bold text-primary">
                                {user.name.charAt(0)}
                            </span>
                        </div>
                        <h2 className="text-xl font-semibold mt-4 text-gray-800">{user.name}</h2>
                        <p className="text-sm text-gray-500">{user.email}</p>
                    </div>

                    <div className="border-t pt-4">
                        <h3 className="text-lg font-semibold mb-4 text-gray-700">User Attributes</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center justify-between">
                                <span>Email:</span>
                                <span>{user.email}</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span>Phone:</span>
                                <span>{user.phone}</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span>Website:</span>
                                <span>{user.website}</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span>Address:</span>
                                <div className='flex flex-col'>
                                    <span>{user.address.street},</span> {/* Placeholder for joined date */}
                                    <span>{user.address.suite},</span> {/* Placeholder for joined date */}
                                    <span>{user.address.city},</span> {/* Placeholder for joined date */}
                                    <span>{user.address.zipecode}</span> {/* Placeholder for joined date */}

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Card - Activity Feed */}

            </div>
        </div>
    );
};

export default UserDetail;
