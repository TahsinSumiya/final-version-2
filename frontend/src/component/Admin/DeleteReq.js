import React from 'react'
import axios from 'axios';
export default function DeeletReq({id}) {
    const handleDelete = () => {
        axios.delete(`http://localhost:80/api/request/${id}`)
          .then(response => {
            setTimeout(function(){
              alert("deleted successfully!!")
          }, 2000);
            console.log(response.data.message); // Layout deleted successfully message
            // You may want to refresh the layouts after deletion
            // You can use state management libraries like Redux for this purpose
          })
          .catch(error => {
            alert(error)
            console.error('Error deleting layout:', error);
          });
      };
  return (
    <div className=''>
      <buttpn onClick={handleDelete}><i class=" mb-4 bi bi-trash3 text-purple-400 text-s"></i></buttpn>
    </div>
  )
}
