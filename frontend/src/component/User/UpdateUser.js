import { Axios } from 'axios';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";  
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css"; 
import { login, logout, selectUser } from "../../features/Slice"; 
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { auth } from "../../firebase";
import UserPost from './UserPost';
import ViewProfile from './ViewProfile';
export default function Profile() {
  const [linkedin, setlinkedin] = useState("");
  const [github, setgithub] = useState("");
  const [date, setdate] = useState(null); // Change the initial state for date to null
  const [category, setcategory] = useState("looking-for-job");
  const [email, setemail] = useState("");
  const [desc, setDesc] = useState("");
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const bodyJSON = {
              linkedin: linkedin,
              github: github,
             
              user: user,
              uuid: user.uid,
              name: user.displayName,
              category: category,
              email: category === 'hiring' ? email : '',
              desc:desc  
          };

          const response = await axios.put(`http://localhost:80/api/user/profile/${user.uid}`, bodyJSON);

          if (response.status === 200) { // Check the response status
              alert('User created successfully!');
              // Reset the form or perform any other necessary actions
              setlinkedin("");
              setgithub("");
              
              setcategory("looking-for-job");
              setemail("");
              setDesc("")
          } else {
              alert('Failed to create user.');
          }
      } catch (error) {
          console.error('Error creating user:', error);
      }
  };

  return (
      <div>
          <h1>profile</h1>
          <form>
              <label>Linkedin
                  <textarea type="text" name="linkedin" value={linkedin} onChange={(e) => setlinkedin(e.target.value)} />
              </label>
              <br />
              <label>Github
                  <textarea type="text" name="github" value={github} onChange={(e) => setgithub(e.target.value)} />
              </label>
              <label>Category
                  <select name="category" onChange={(e) => setcategory(e.target.value)}>
                      <option value="looking-for-job">Looking for Job</option>
                      <option value="hiring">Hiring</option>
                  </select>
              </label>
              {category === 'hiring' && (
                  <div>
                      <label>Email:</label>
                      <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          required
                      />
                      <label>desc:</label>
                        <input
                            type="text"
                            name="text"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                           
                        />
                  </div>
              )}
              <br />
              <br />
         
              <br />
              <button type="submit" onClick={handleSubmit}>Add user</button>
          </form>
          <UserPost/>
          <ViewProfile/>
          <Link to='updateprofile'>update</Link>
      </div>
    
  )
}
