import React from 'react'
import { useEffect ,useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";


export default function AllSpecificUser() {
    let search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("s");
    const [userPosts, setUserPosts] = useState([]);
    const [userProfile, setUserProfile] = useState([]);
    const [Layouts, setLayouts] = useState([]);

    useEffect(() => {
      // Fetch user profile by user UID
      axios
        .get(`http://localhost:80/api/user/getuserpofile/${id}`)
        .then((response) => {
          setUserProfile(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
        });
    }, [
      id
    ]); 
    
    useEffect(() => {
      // Fetch user profile by user UID
      axios
        .get(`http://localhost:80/api/layouts/getlayoutsbyId/${id}`)
        .then((response) => {
          setLayouts(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
        });
    }, [
      id
    ]); 

    useEffect(() => {
        
        // Fetch posts by user UID
        axios.get(`http://localhost:80/api/user/postbyid/${id}`)
          .then((response) => {
            setUserPosts(response.data);
          })
          .catch((error) => {
            console.error('Error fetching user posts:', error);
          });
      
    }, []);
  return (
    <>
     
  
     
        <ul>
        {userPosts.map((post) => (
          <li key={post._id}>
            <Link to={`/question?q=${post?._id}`}><h4>{post.title}</h4></Link>
           <h3>{post.user.displayName}</h3>
          </li>
        ))}
      </ul>
      <div>
      <h3>Profile Info</h3>
      <div>
      <h3>User Profile</h3>
      {userProfile ? (
        <div>
          <h4>LinkedIn: {userProfile.linkedin}</h4>
          <h4>GitHub: {userProfile.github}</h4>
          <h4>Birthdate:  {userProfile.birthdate}</h4>
          {/* Add other user profile fields as needed */}
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
    <h2>layouts</h2>
    <ul>
        {Layouts.map((layout) => (
          <li key={layout._id}>
          <h4>{layout.html}</h4>
          <h4>{layout.css}</h4>
          <h4>{layout.js}</h4>
         
          </li>
        ))}
      </ul>
    </div>
    </>
    
  )
}
