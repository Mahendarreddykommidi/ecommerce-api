import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { Currency, X } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar"
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { updateCartQuantity,
        cartItems,setCartItems,
        getCartCount,products,getCartAmount,currency}=useContext(ShopContext)
        const cartProducts = products.filter(product => cartItems[product.id] > 0);
        const navigate=useNavigate()
          const cartTotal = cartProducts
  .reduce((total, product) => total + product.price * cartItems[product.id], 0)
  .toFixed(2);
  return (
    <div>   
      <Navbar/> 
        <div className='flex items-center justify-between mx-30 pb-8 my-15 border-b-2 border-gray-300'>
          <p className='text-2xl lg:text-4xl font-semibold'>Your cart</p>
          <p className='text-blue-500 text-3xl flex gap-2'>{getCartCount()}<span className='text-gray-600 '>Items</span></p>

        </div>
        <div className='overflow-x-hidden mx-30'>
          <table className='min-w-full table-auto '>
            <thead className='text-left'>
              <tr>     
              <th className='text-nowrap pb-6 md:px-4 px-1 text-gray-600 font-medium'>Product</th>
              <th className='pb-6 md:px-4 px-2 text-gray-600 font-medium'>Price</th>
              <th className='pb-6 md:px-4 px-2 text-gray-600 font-medium'>Quantity</th>
              <th className='pb-6 md:px-4 px-2 text-gray-600 font-medium'>Subtotal</th>
              <th className='pb-6 md:px-4 px-2 text-gray-600 font-medium'>Remove</th>
              </tr>
            </thead>
            <tbody>
               {cartProducts.map((product) => {
          const quantity = cartItems[product.id];
          const totalPrice = product.price * quantity;
          return (
            <tr key={product.id} className="align-middle">
              {/* Product */}
              <td className="py-4 px-2 flex flex-col md:flex-row md:items-center gap-3">
                <img src={product.image} alt={product.title} className="w-14 h-14 object-contain rounded" />
                <span className="text-sm font-medium">{product.title}</span>
              </td>
              {/* Price */}
              <td className="py-4 px-6 md:px-2">${product.price}</td>
              {/* Quantity */}
              <td className="py-4 px-2">
                <span className="border px-4  py-1 rounded">{quantity}</span>
              </td>
              {/* Subtotal */}
              <td className="py-4 px-6 font-semibold">${totalPrice}</td>
              {/* Remove */}
              <td className="py-4 px-6 md:px-2">
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => {
                    const updatedCart = { ...cartItems };
                    delete updatedCart[product.id];
                    setCartItems(updatedCart);
                  }}
                  aria-label="Remove item"
                >
                  <X />
                </button>
              </td>
            </tr>
          );
        })}
            </tbody>
          </table>

        </div>
         <div className='w-full'>
        <div className="text-2xl">
            
        </div>
        

    </div>
<div className="cart-bottom-left flex flex-col space-y-2 mx-6 w-50 my-20 border-2   ">
      <div className="cart-total">
          <h2>Cart Total</h2>
        </div>
        
      <div className="cart-total-details flex gap-5">
            <p>Subtotal</p>
            <p>${cartTotal}</p> {/* Correctly call the function and format the value */}
          </div>
          <hr />
        
          <div className="cart-total-details flex gap-5">
            <p>Delivery Fee</p>
            <p className='my-2'>Free</p> 
          </div>
          <hr />
      
          <div className="cart-total-details inline-flex gap-5">
            <b> Total</b>
            <p className='my-2'>${cartTotal}</p> {/* Add delivery fee to subtotal */}
            <hr />
            
          </div>
      </div>
      </div>
      
  
  
        
    


  
  )
}

export default Cart