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

    const cities = users.map((city) => city.address.city);

    const filterData = users.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) &&
            (selectedCity === "" || item.address.city === selectedCity)
    );

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container-fluid bg-light py-5">
            <div className="container bg-white p-4 rounded shadow-sm">
                <div className="row mb-4">
                    <div className="col-md-6">
                        <form>
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search users..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </form>
                    </div>
                    <div className="col-md-6">
                        <select
                            className="form-select"
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
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <table className="table table-light table-hover table-bordered text-center align-middle">
                            <thead className="table-secondary">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterData.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address.city}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSec1;
