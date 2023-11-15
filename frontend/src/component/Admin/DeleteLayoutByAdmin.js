import React, {useState,useEffect} from 'react'
import axios from 'axios';
export default function DeleteLayoutByAdmin({layoutId,email}) {
    const [emailSent, setEmailSent] = useState(false);
    const sendEmail = (e) => {
   
   
      try {
        const response =  axios.post('http://localhost:80/api/autoemail', {
          userEmail: email
        });
  
        if (response.status === 201) {
          setEmailSent(true);
        } else {
          console.error('Email not sent.');
        }
      } catch (error) {
        console.error('Error sending email:', error);
      }
    };
      const handleDelete = () => {
        
          axios.delete(`http://localhost:80/api/layouts/${layoutId}`)
            .then(response => {
              alert('deleted succesfully')
              console.log(response.data.message);
              sendEmail() // Layout deleted successfully message
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
       <buttpn class="relative my-5 text-red-600 cursor-pointer" onClick={handleDelete}><i class="bi bi-trash3"></i></buttpn>
    </div>

  )
}
