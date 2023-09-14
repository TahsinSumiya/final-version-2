import React from 'react'
import { login, logout, selectUser } from "../../features/Slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect ,useState} from "react";
import { Link } from 'react-router-dom';
import Profile from './Profile';
import axios from "axios";
function UserPost() {
    const user = useSelector(selectUser);
  const dispatch = useDispatch();
    const [userPosts, setUserPosts] = useState([]);
    const [Layouts, setLayouts] = useState([]);
    useEffect(() => {
        
          // Fetch posts by user UID
          axios.get(`http://localhost:80/api/user/postbyid/${user.uid}`)
            .then((response) => {
              setUserPosts(response.data);
            })
            .catch((error) => {
              console.error('Error fetching user posts:', error);
            });
        
      }, []);
          
    useEffect(() => {
      // Fetch user profile by user UID
      axios
        .get(`http://localhost:80/api/layouts/getlayoutsbyId/${user.uid}`)
        .then((response) => {
          setLayouts(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
        });
    }, []); 
  return (
    <div>
     
    
      <h3>Posts by User:</h3>
      <ul>
        {userPosts.map((post) => (
          <li key={post._id}>
            <Link to={`/question?q=${post?._id}`}><h4>{post.title}</h4></Link>
           {/* <h3>{post.user.displayName}</h3> */}
          </li>
        ))}
      </ul>
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
  )
}

export default UserPost
