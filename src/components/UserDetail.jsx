import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowLeft, FaGlobe, FaPhone, FaBuilding } from 'react-icons/fa';

const UserDetail = () => {
    const { id } = useParams();
    const { users } = useSelector(state => state.users);
    const user = users.find(u => u.id === parseInt(id));

    if (!user) {
        return <div className="text-center p-4 text-gray-600">User not found</div>;
    }

    return (
        <div className="container mx-auto px-6 py-8">
            {/* Back Button */}
            <Link
                to="/"
                className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800 transition font-semibold"
            >
                <FaArrowLeft className="mr-2" />
                Back to Users
            </Link>

            {/* User Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    <h1 className="text-3xl font-bold">{user.name}</h1>
                    <p className="text-sm opacity-90 mt-1">User ID: {user.id}</p>
                </div>

                <div className="p-6">
                    {/* Contact Information */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-gray-100 p-5 rounded-lg">
                            <h2 className="text-lg font-semibold mb-4 text-blue-600">
                                Contact Information
                            </h2>
                            <p className="flex items-center gap-2">
                                <FaGlobe className="text-blue-500" />
                                <strong>Email:</strong> {user.email}
                            </p>
                            <p className="flex items-center gap-2 mt-2">
                                <FaPhone className="text-blue-500" />
                                <strong>Phone:</strong> {user.phone}
                            </p>
                            <p className="flex items-center gap-2 mt-2">
                                <FaGlobe className="text-blue-500" />
                                <strong>Website:</strong> {user.website}
                            </p>
                        </div>

                        {/* Address */}
                        <div className="bg-gray-100 p-5 rounded-lg">
                            <h2 className="text-lg font-semibold mb-4 text-blue-600">Address</h2>
                            <p>
                                <strong>Street:</strong> {user.address.street}
                            </p>
                            <p>
                                <strong>Suite:</strong> {user.address.suite}
                            </p>
                            <p>
                                <strong>City:</strong> {user.address.city}
                            </p>
                            <p>
                                <strong>Zipcode:</strong> {user.address.zipcode}
                            </p>
                        </div>
                    </div>

                    {/* Company Information */}
                    <div className="bg-gray-100 p-5 rounded-lg">
                        <h2 className="text-lg font-semibold mb-4 text-blue-600 flex items-center gap-2">
                            <FaBuilding className="text-blue-500" />
                            Company Details
                        </h2>
                        <p>
                            <strong>Name:</strong> {user.company.name}
                        </p>
                        <p>
                            <strong>Catch Phrase:</strong> {user.company.catchPhrase}
                        </p>
                        <p>
                            <strong>Business:</strong> {user.company.bs}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
