import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Productitem from './Productitem'
import { useNavigate } from 'react-router-dom'

const Featuredproducts = () => {
  const {products}=useContext(ShopContext)
  const navigate=useNavigate()
  return (
    <div>
     <div>
       <h2 className='font-bold tect-lg md:text-xl lg:2xl text-center my-10'>Featured products</h2>
     </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:mx-30 w-auto  gap-5">
              {products.slice(0,5).map((item) => (
                <div key={item.id} id={item.id} className="flex items-center justify-between">
                  <Productitem
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    description={item.description}
                    rating={item.rating}
                  />
                </div>
              ))}
            </div>
            <button onClick={()=>navigate("/all-products")} className='flex border px-6 py-2 mx-auto my-10'>See more</button>
</div>
  )
}

export default Featuredproducts