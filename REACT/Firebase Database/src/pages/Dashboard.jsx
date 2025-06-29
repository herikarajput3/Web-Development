import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import DataForm from '../components/DataForm';
import DataList from '../components/DataList';

const Dashboard = () => {
    const [items, setItems] = useState([]);
    const [editingItem, setEditingItem] = useState(null);

    const fetchItems = async () => {
        const querySnapshot = await getDocs(collection(db, 'items'));
        const fetchedItems = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setItems(fetchedItems);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const handleAdd = async (item) => {
        try {
            if (editingItem) {
                const docRef = doc(db, 'items', editingItem.id);
                await updateDoc(docRef, item); 
                setEditingItem(null); 
            } else {
                await addDoc(collection(db, 'items'), item); 
            }
            fetchItems(); 
        } catch (error) {
            console.error("Error adding/updating item:", error);
        }
    };

    const handleEdit = (item) => {
        setEditingItem(item);
    };

    const handleDelete = async (id) => {
        const docRef = doc(db, 'items', id);
        await deleteDoc(docRef);
        fetchItems();
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    Firebase Database CRUD Operation
                </h1>
                <DataForm
                    onSubmit={handleAdd}
                    initialValues={editingItem || { name: '', description: '' }}
                />
                <DataList items={items} onEdit={handleEdit} onDelete={handleDelete} />
            </div>
        </div>
    );
};

export default Dashboard;
