import React, { useContext, useEffect, useState } from 'react';
import Productitem from "../components/Productitem";
import { ShopContext } from '../context/Shopcontext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';

const Allproducts = () => {
const {products}=useContext(ShopContext)
const {productid}=useParams()
console.log(productid)

  return (
    <>
      <Navbar/>
<h2 className='text-2xl font-semibold text-right mr-20'>All products</h2>
  
    <div className="flex items-center  overflow-hidden p-4 sm:p-6 md:p-10">
    
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 m-auto w-auto  gap-5">
        {products.map((item) => (
          
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
    </div>
    <div>

    </div>
    <Footer/>
    
  </>
   
    
    
  );
};

export default Allproducts;
