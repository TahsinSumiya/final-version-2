import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
      u r not logged in
    <Link to='/auth'>auth</Link>
    </div>
  )
}
