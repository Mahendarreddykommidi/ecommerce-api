import React, { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Productsdisplay = ({ product }) => {
  const { products,addToCart } = useContext(ShopContext);

  return (
    <div>
      <Navbar />
      <div className="Productdisplay flex flex-col md:flex-row items-center  gap-8 md:gap-5 my-10 px-4 md:px-10 lg:px-32">
        <div className="main-section flex flex-col md:flex-row overflow-hidden gap-8 md:gap-15 w-full">
          <div className="flex flex-col md:flex-row justify-between my-8 md:my-15 gap-8 md:gap-15 w-full">
            <img
              className="w-full md:w-80 max-w-xs md:max-w-65 h-64 md:h-100 object-contain rounded-lg mx-auto "
              src={product.image}
              alt=""
            />
            <div className="flex flex-col gap-5 w-full md:w-2/3 my-10">
              <p className="text-gray-600">{product.category}</p>
            
              <p className="text-2xl font-medium text-gray-700">{product.title}</p>
              <p className="w-full">{product.description}</p>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <button onClick={()=>addToCart(product.id)} className="bg-blue-500 px-6 py-2 text-white rounded-lg w-full sm:w-auto">
                  Addtocart
                </button>
               
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Productsdisplay;
