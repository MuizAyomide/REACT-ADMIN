import React from 'react'
import './User.scss'
import Single from '../../Components/Single/Single'
import { singleUser } from '../../data'

const User = () => {

        //fetch data and fetch to single component
  return (
    <div className='user'>
      <Single {...singleUser}/>
    </div>
  )
}

export default User
