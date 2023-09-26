import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios, { all } from 'axios';

import { selectUser } from '../../features/Slice';

export default function ViewProfile() {
  const [userProfile, setUserProfile] = useState(null);
  const user = useSelector(selectUser);

  useEffect(() => {
    // Fetch user profile by user UID
    axios
      .get(`http://localhost:80/api/user/getuserpofile/${user.uid}`)
      .then((response) => {
        setUserProfile(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  }, [user.uid]); // Include user.uid in the dependency array

  return (
    <div>
      <h3>Profile Info</h3>
      <div>
      <h3>User Profile</h3>
      {userProfile ? (
        <div>
        <img src={userProfile.user.photoURL} alt="photo"/>
          <h4>LinkedIn: {userProfile.linkedin}</h4>
          <h4>GitHub: {userProfile.github}</h4>
          <h4>Birthdate:  {userProfile.birthdate}</h4>
          <h4>email:  {userProfile.email}</h4>
          <h4>category:  {userProfile.category}</h4>
          <h4>name:  {userProfile.name}</h4>
          <h4>desc:  {userProfile.desc}</h4>
          {/* Add other user profile fields as needed */}
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
    </div>
  );
}
