import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { X } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar"
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {
    updateCartQuantity,
    cartItems,
    setCartItems,
    getCartCount,
    products,
    currency
  } = useContext(ShopContext);

  const cartProducts = products.filter(product => cartItems[product.id] > 0);
  const navigate = useNavigate();
  const cartTotal = cartProducts
    .reduce((total, product) => total + product.price * cartItems[product.id], 0)
    .toFixed(2);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto px-2 sm:px-6 py-8 flex-1">
        {/* Cart Table */}
        <div className="flex-1 bg-white rounded-lg shadow p-4 overflow-x-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 border-b pb-4">
            <p className="text-2xl lg:text-4xl font-semibold">Your cart</p>
            <p className="text-blue-500 text-xl sm:text-3xl flex gap-2 items-center">
              {getCartCount()}
              <span className="text-gray-600 text-base sm:text-xl">Items</span>
            </p>
          </div>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-gray-600 font-medium text-left text-sm">
                <th className="py-3 px-2">Product</th>
                <th className="py-3 px-2 hidden md:table-cell text-center">Quantity</th>
                <th className="py-3 px-2 text-center">Subtotal</th>
                <th className="py-3 px-2 hidden md:table-cell text-center">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-10 text-gray-400">
                    Your cart is empty.
                  </td>
                </tr>
              ) : (
                cartProducts.map((product) => {
                  const quantity = cartItems[product.id];
                  const totalPrice = product.price * quantity;
                  return (
                    <tr key={product.id} className="">
                      {/* Product Info */}
                      <td className="flex items-center gap-4 py-4 px-2">
                        <div className="rounded-lg overflow-hidden bg-gray-100 p-2 w-16 h-16 flex items-center justify-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-14 h-14 object-contain"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-800 text-sm sm:text-base">{product.name || product.title}</span>
                          {/* Remove button for mobile */}
                          <button
                            className="md:hidden text-xs text-orange-600 mt-1 w-fit"
                            onClick={() => updateCartQuantity(product.id, 0)}
                          >
                            Remove
                          </button>
                        </div>
                      </td>
                      {/* Quantity */}
                      <td className="hidden md:table-cell text-center align-middle">
                        <span className="inline-block border px-3 py-1 rounded bg-gray-50">{quantity}</span>
                      </td>
                      {/* Subtotal */}
                      <td className="text-center align-middle font-semibold text-gray-700">
                        {currency}{(product.price * quantity).toFixed(2)}
                      </td>
                      {/* Remove */}
                      <td className="hidden md:table-cell text-center align-middle">
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => updateCartQuantity(product.id, 0)}
                          aria-label="Remove item"
                        >
                          <X />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        {/* Cart Summary */}
        <div className="w-full lg:w-96 bg-white rounded-lg shadow p-6 flex flex-col gap-4 h-fit">
          <h2 className="text-xl font-semibold mb-2">Cart Total</h2>
          <div className="flex justify-between text-gray-700">
            <span>Subtotal</span>
            <span>${cartTotal}</span>
          </div>
          <hr />
          <div className="flex justify-between text-gray-700">
            <span>Delivery Fee</span>
            <span className="my-2">Free</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${cartTotal}</span>
          </div>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
            disabled={cartProducts.length === 0}
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart