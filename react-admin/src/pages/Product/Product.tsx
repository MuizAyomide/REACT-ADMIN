import React from 'react'
import './Product.scss'
import Single from '../../Components/Single/Single'
import { singleProduct } from '../../data'

const Product = () => {

    //fetch data and fetch to single component
  return (
    <div className='product'>
      <Single {...singleProduct}/>
    </div>
  )
}

export default Product
