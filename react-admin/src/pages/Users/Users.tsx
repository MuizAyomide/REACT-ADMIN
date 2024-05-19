import React from 'react'
import DataTable from '../../Components/DataTable/DataTable'

const Users = () => {
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button>Add new user</button>
      </div>
      <DataTable />
    </div>
  )
}

export default Users
