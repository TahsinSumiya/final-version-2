import React, { useEffect,useState } from 'react'
import axios from 'axios';
import emailjs from 'email-js';

export default function DeleteLayout({layoutId,email}) {
 
    const handleDelete = () => {
      
        axios.delete(`http://localhost:80/api/layouts/${layoutId}`)
          .then(response => {
            alert('deleted succesfully')
            console.log(response.data.message);
           
            // You may want to refresh the layouts after deletion
            // You can use state management libraries like Redux for this purpose
          })
          .catch(error => {
            alert(error)
            console.error('Error deleting layout:', error);
          });
      };
      
  return (
    <div>
      <buttpn class="relative my-5 text-purple-600" onClick={handleDelete}><i class="bi bi-trash3"></i></buttpn>
    </div>
  )
}
