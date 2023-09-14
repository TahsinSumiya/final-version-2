import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { login, logout, selectUser } from "../../features/Slice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { auth } from "../../firebase";
import { getFirestore, getDocs, collection, where, query } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import firebase from "firebase/app";

export default function Search() {
 

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
 // Initialize Firestore
 const handleSearch = async () => {
  try {
    // Make an HTTP GET request to your backend route with the search query
    const response = await axios.get(`http://localhost:80/api/user/searchusers/${searchQuery}`);
    const users = response.data;

    setSearchResults(users);
  } catch (error) {
    console.error("Error searching for users:", error);
  }
};


  return (
<div>
      <input
        type="text"
        placeholder="Search for users"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((user) => (
          <li key={user.uid}>
            <Link to={`/specificuser?s=${user.uid}`}>{user.displayName}</Link> 
          </li>
        ))}
      </ul>
    </div>
  )
}
