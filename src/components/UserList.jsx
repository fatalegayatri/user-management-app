import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers, filterUsers } from '../store/usersSlice';
import { FaUser } from 'react-icons/fa';
import { MdMailOutline, MdOutlinePhone } from 'react-icons/md';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import CreateUser from './CreateUser';
import Button from './common/Button';

const UserList = () => {
    const dispatch = useDispatch();
    const { filteredUsers, loading, error } = useSelector(state => state.users);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModel, setShowModel] = useState();


    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    console.log(filteredUsers + "filterUsers");

    useEffect(() => {
        dispatch(filterUsers(searchTerm));
    }, [searchTerm, dispatch]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    if (loading) return <div className="text-center p-4">Loading...</div>;
    if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

    return (
        <div className="container  mx-auto px-6 py-8">
            {/* Header Section */}
            <div className="bg-white rounded-lg shadow-lg flex justify-between items-center p-5 mb-8">
                <h1 className="text-lg font-bold text-gray-800">Users</h1>
                <input
                    type="text"
                    placeholder="Search users by name or email"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="p-2 border rounded-lg focus:outline-none max-w-sm w-full   focus:ring-2 focus:ring-blue-500"
                />
                <div>
                    <Button
                        onClick={() => setShowModel(true)}
                    >
                        Add User
                    </Button>
                </div>

            </div>

            {/* User Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {!filteredUsers ? <div className="text-center p-4">No users found</div> :
                    filteredUsers.map(user => (
                        <Link
                            to={`/user/${user.id}`}
                            key={user.id}
                            className="bg-white rounded-lg border-2 transform transition-transform duration-700  hover:scale-[1.01] shadow-md hover:shadow-lg  hover:border-blue-100 hover:border-2"
                        >
                            {/* User Header */}
                            <div className="p-5 flex items-center">
                                <div className="w-12 h-12 bg-gray-100 text-secondary rounded-full flex items-center justify-center">
                                    <FaUser className="text-2xl" />
                                </div>
                                <div className="ml-4">
                                    <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
                                    <p className="text-sm text-gray-500 flex items-center gap-1">
                                        <MdMailOutline className="text-primary" />
                                        {user.email}
                                    </p>
                                </div>
                            </div>

                            {/* User Details */}
                            <div className="px-5 py-3 border-t flex justify-between items-center ">
                                <p className="text-sm text-gray-600 flex items-center gap-2">
                                    <MdOutlinePhone className="text-primary" />
                                    {user.phone}
                                </p>
                                <p className="text-sm text-gray-600 flex items-center gap-2 mt-2">
                                    <HiOutlineOfficeBuilding className="text-primary" />
                                    {user.company.name}
                                </p>
                            </div>


                        </Link>
                    ))}
            </div>
            {
                showModel && (
                    <CreateUser setShowModel={setShowModel} />
                )
            }
        </div>
    );
};

export default UserList;
