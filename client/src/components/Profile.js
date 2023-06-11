import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const {user:{firstName,lastName,email,imageUrl},setUser} =useContext(MyContext)
    const navigate= useNavigate()
    const logoutUser=()=>{
        localStorage.removeItem("token")
        setUser(null)
        navigate("/")
    }
  return (
    <div className="max-w-md mx-auto p-20 bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img className="h-48 w-full object-cover md:w-48" src={imageUrl} alt="Profile" />
      </div>
      <div className="p-4">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          Profile
        </div>
        <div className="mt-2">
          <h2 className="text-2xl font-bold text-gray-800">
            {firstName} {lastName}
          </h2>
          <p className="text-gray-600">{email}</p>
        </div>
        <button onClick={logoutUser} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">logout</button>
      
      </div>
    </div>
  </div>
          
          
  );
};

export default Profile;
