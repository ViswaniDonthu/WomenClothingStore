import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SettingsPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    gender: 'Male',
    location: 'New York',
    username: 'johndoe123',
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Save changes here (API call, etc.)
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleOptionClick = (option) => {
    switch (option) {
      case 'help':
        alert('Redirecting to Help Centre...');
        break;
      case 'payments':
        alert('Redirecting to My Payments...');
        break;
      case 'supplier':
        alert('Redirecting to Become a Supplier...');
        break;
      case 'rate':
        alert('Redirecting to Rate Website...');
        break;
      case 'legal':
        alert('Redirecting to Legal and Policies...');
        break;
      default:
        alert('Unknown option');
    }
  };

  return (
    <div className="settings-page">
      <div className="profile-info p-6 bg-white shadow-md rounded-md">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Profile Information</h2>
          <button onClick={handleEditClick} className="text-blue-500">
            <i className="fas fa-edit"></i> Edit Profile
          </button>
        </div>

        {!isEditing ? (
          <div className="profile-details mt-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Name:</span>
              <span>{userInfo.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Email:</span>
              <span>{userInfo.email}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Phone:</span>
              <span>{userInfo.phone}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Gender:</span>
              <span>{userInfo.gender}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Location:</span>
              <span>{userInfo.location}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Username:</span>
              <span>{userInfo.username}</span>
            </div>
          </div>
        ) : (
          <div className="edit-form mt-4">
            <div className="mb-4">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={userInfo.phone}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label>Gender:</label>
              <select
                name="gender"
                value={userInfo.gender}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label>Location:</label>
              <input
                type="text"
                name="location"
                value={userInfo.location}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={userInfo.username}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button onClick={() => setIsEditing(false)} className="text-red-500">
                <i className="fas fa-times-circle"></i> Cancel
              </button>
              <button onClick={handleSaveClick} className="text-green-500">
                <i className="fas fa-save"></i> Save
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Other options */}
      <div className="other-options mt-6 bg-white p-6 rounded-md shadow-md">
        <h3 className="text-xl font-semibold mb-4">Other Options</h3>
        <ul>
          <li>
            <button onClick={() => handleOptionClick('help')} className="text-blue-500 hover:underline">Help Centre</button>
          </li>
          <li>
            <button onClick={() => handleOptionClick('payments')} className="text-blue-500 hover:underline">My Payments</button>
          </li>
          <li>
            <button onClick={() => handleOptionClick('supplier')} className="text-blue-500 hover:underline">Become a Supplier</button>
          </li>
          <li>
            <button onClick={() => handleOptionClick('rate')} className="text-blue-500 hover:underline">Rate Website</button>
          </li>
          <li>
            <button onClick={() => handleOptionClick('legal')} className="text-blue-500 hover:underline">Legal and Policies</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SettingsPage;
