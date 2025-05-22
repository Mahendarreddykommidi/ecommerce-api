import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext';
import Productsdisplay from './Productsdisplay';
import { useParams } from 'react-router-dom';

const Product = () => {
      const { products} = useContext(ShopContext);
      const {id}=useParams()
      console.log(id)

 

   const product = products.find((item) => item.id ===Number(id));
  return (
    <div>
 <Productsdisplay product={product} />
    </div>
  )
}

export default Product