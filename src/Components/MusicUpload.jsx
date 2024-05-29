import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MusicUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setMessage(''); // Clear message when a new file is selected
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file.'); // Show message if no file selected
      setMessageColor("text-red-500");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8080/uploadMusic', formData);
      console.log(response.data);
      setMessage('Music uploaded successfully.');
      setMessageColor("text-green-500");
      setFile(null); // Clear the file input after successful upload
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Error uploading music file.');
      setMessageColor("text-red-500");
    }
  };

  return (
    <div className="relative min-h-screen flex    ">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center filter blur-sm"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8bXVzaWN8fHx8fHwxNjQ4MjQxNjU4&ixlib=rb-1.2.1&q=80")',
          backgroundSize: 'cover'
        }}
      ></div>
      <div className="bg-opacity-50 my-auto bg-gray-200 bg-opacity-90 p-8 rounded-lg mx-auto  shadow-lg w-full max-w-lg backdrop-blur-md">

        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800 py-30">Upload Music</h2>
        <div className="mb-4">
          <input type="file" onChange={handleFileChange} className="hover:shadow-sm border shadow-lg block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
        </div>
        <div className="flex justify-between">
          <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded hover:shadow-lg hover:bg-blue-700">
            Upload
          </button>
          <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:shadow-lg hover:bg-blue-700" to={"/musicList"}>
            Music List
          </Link>
        </div>
        {message && <p className={`mt-4 text-center ${messageColor}`}>{message}</p>}
      </div>
    </div>
  );
};

export default MusicUpload;
