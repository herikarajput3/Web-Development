import React from 'react';
import { ref, deleteObject } from 'firebase/storage';
import { storage } from '../firebase/firebase';

const ImageList = ({ images, onDelete }) => {
  const handleDelete = async (name) => {
    const imageRef = ref(storage, `images/${name}`);
    await deleteObject(imageRef);
    onDelete(name);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {images.map((img) => (
        <div key={img.name} className="bg-white p-4 rounded shadow">
          <img src={img.url} alt={img.name} className="w-full h-32 object-cover rounded" />
          <button
            onClick={() => handleDelete(img.name)}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
