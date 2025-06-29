import React, { useState, useEffect } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/firebase';
import UploadForm from '../components/UploadForm';
import ImageList from '../components/ImageList';

const Dashboard = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const listRef = ref(storage, 'images');
    const res = await listAll(listRef);

    const urls = await Promise.all(
      res.items.map(async (item) => {
        const url = await getDownloadURL(item);
        return { name: item.name, url };
      })
    );

    setImages(urls);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleUpload = (newImage) => {
    setImages((prev) => [...prev, newImage]);
  };

  const handleDelete = (name) => {
    setImages((prev) => prev.filter((img) => img.name !== name));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Firebase Storage CRUD</h1>
      <UploadForm onUpload={handleUpload} />
      <ImageList images={images} onDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;
