import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
 

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getAllUser'); // Replace with your backend endpoint
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleUpdate = async (id) => {
    try {
      // Example update request, modify as per your backend API
      const response = await axios.put(`http://localhost:8080/updateUser/${id}`);
      console.log('User updated:', response.data);
      fetchData(); // Fetch updated data after updating user
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDelete = async (id) => {
    console.log('Delete user:', id);
    try {
        // Example delete request, modify as per your backend API
        const response = await axios.delete(`http://localhost:8080/deleteById/${id}`);
        console.log('User deleted:', response.data);
        fetchData(); // Fetch updated data after deleting user
      } catch (error) {
        console.error('Error deleting user:', error);
      }

  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">User Table</h1>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2">ID</th>
            <th className="border border-gray-200 px-4 py-2">Name</th>
            <th className="border border-gray-200 px-4 py-2">Email</th>
            <th className="border border-gray-200 px-4 py-2">Message</th>
            <th className="border border-gray-200 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
        {users.map(user => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border border-gray-200 px-4 py-2">{user.id}</td>
              <td className="border border-gray-200 px-4 py-2">{user.name}</td>
              <td className="border border-gray-200 px-4 py-2">{user.email}</td>
              <td className="border border-gray-200 px-4 py-2">{user.message}</td>
              
              <td className="border border-gray-200 px-4 py-2">
              <button onClick={() => handleUpdate(user.id)} className='p-2 bg-slate-600'>Update</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
