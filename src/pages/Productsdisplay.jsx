import React, { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Productsdisplay = ({ product }) => {
  const { products } = useContext(ShopContext);

  return (
    <div>
      <Navbar />
      <div className="Productdisplay flex flex-col-reverse gap-8 md:flex-row md:gap-5 my-17 mx-20 px-32">
        
              <div className="main-section flex  justify-between gap-15 ">
        <div className="flex ">
          <div className="flex flex-col md:flex-row justify-between my-15 gap-15">
          
            
                       <img className="md:max-w-70 w-full h-100" src={product.image} alt="" />

     
          <div className="flex flex-col gap-5">
            <p className="text-gray-600">{product.category}</p>
             <p className="text-2xl font-medium text-gray-700">{product.title}</p>
            <p className="max-sm:w-full md:w-full ">{product.description}</p>
             <div className="flex items-center gap-6">
            <button className="bg-blue-500 px-6 py-2 text-white rounded-lg">Addtocart</button>
            <button className="bg-green-500 px-6 py-2 text-white rounded-lg">Buynow</button>
          </div>
      
          </div>
        
      

           
            <div>
             
            </div>
          </div>
        </div>
         
      </div>
      </div>
        {/* Left Section: Image List */}
        
  
    
<Footer/>
    </div>
  );
};

export default Productsdisplay;
