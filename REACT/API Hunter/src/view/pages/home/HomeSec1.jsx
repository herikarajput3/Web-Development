import React, { useEffect, useState } from "react";

const HomeSec1 = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const fetchData = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUsers(data);
        } catch (error) {
            console.error(error);
        }
    };

    const cities = Array.from(new Set(users.map((user) => user.address.city)));

    const filterData = users.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) &&
            (selectedCity === "" || item.address.city === selectedCity)
    );

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    User Directory
                </h1>

                {/* Search and Filter */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search users..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            🔍
                        </span>
                    </div>
                    <div className="relative">
                        <select
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                        >
                            <option value="">All Cities</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            🏙️
                        </span>
                    </div>
                </div>

                {/* User Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse border border-gray-300 shadow-sm">
                        <thead>
                            <tr className="bg-blue-500 text-white">
                                <th className="border border-gray-300 px-6 py-4">Name</th>
                                <th className="border border-gray-300 px-6 py-4">Email</th>
                                <th className="border border-gray-300 px-6 py-4">City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterData.length > 0 ? (
                                filterData.map((user) => (
                                    <tr
                                        key={user.id}
                                        className="even:bg-gray-50 hover:bg-gray-100 transition-colors"
                                    >
                                        <td className="border border-gray-300 px-6 py-4">
                                            {user.name}
                                        </td>
                                        <td className="border border-gray-300 px-6 py-4">
                                            {user.email}
                                        </td>
                                        <td className="border border-gray-300 px-6 py-4">
                                            {user.address.city}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="3"
                                        className="text-center text-gray-500 py-6"
                                    >
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HomeSec1;
