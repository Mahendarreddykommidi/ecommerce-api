import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { Link, useParams } from 'react-router-dom'


export default function Productitem({id,title,image,price,}){
    const { addToCart}=useContext(ShopContext)

    const {products}=useContext(ShopContext)
 
  return (
   
 
    <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-50 gap-20 max-w-50 w-full  shadow-lg">
        <Link to={`/product/${id}`}>   
    <div className="group cursor-pointer flex items-center justify-center px-2 aspect-square">
        <img className="w-full h-full  object-contain group-hover:scale-105 animate-fade-in transition-transform duration-300" src={image} alt={title} />
    </div>
     </Link>
    <div className="text-gray-500/60 text-sm">
     
        <p className="text-gray-700 font-medium text-base truncate w-full">{title}</p>
   
        <div className="flex items-end justify-between mt-3">
            <p className="md:text-xl text-base font-medium text-indigo-500">
                ${price} 
               
            </p>
          
          
            <button onClick={()=>addToCart(id)} className='bg-blue-500 px-2 py-1.5 rounded-lg text-white'>Add to cart</button>

           
        </div>
    </div>
</div>
   
  )
}
