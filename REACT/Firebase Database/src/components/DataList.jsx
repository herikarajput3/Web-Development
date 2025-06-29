import React from 'react';

const DataList = ({ items, onEdit, onDelete }) => {
    return (
        <div className="mt-8 space-y-6">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200"
                >
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                    <div className="mt-4 flex justify-end space-x-4">
                        <button
                            onClick={() => onEdit(item)}
                            className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onDelete(item.id)}
                            className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DataList;
