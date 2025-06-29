import React, { useState, useEffect } from 'react';

const DataForm = ({ onSubmit, initialValues = { name: '', description: '' } }) => {
    const [formData, setFormData] = useState(initialValues);

    useEffect(() => {
        setFormData(initialValues); // Reset form data when initialValues change
    }, [initialValues]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); // Send the form data to the parent component
        setFormData({ name: '', description: '' }); // Reset the form
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg space-y-6"
        >
            <h2 className="text-lg font-semibold text-gray-800 text-center">
                {initialValues.id ? 'Edit Item' : 'Add New Item'}
            </h2>

            <div>
                <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter item name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                />
            </div>

            <div>
                <label htmlFor="description" className="block text-gray-600 font-medium mb-2">
                    Description
                </label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter item description"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-2 rounded-lg shadow hover:from-blue-600 hover:to-blue-700 transition-all"
            >
                Save Item
            </button>
        </form>
    );
};

export default DataForm;
