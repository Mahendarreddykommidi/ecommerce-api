import { ShoppingCart, Menu, X } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  const { getCartCount } = useContext(ShopContext)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="w-full drop-shadow-2xl bg-white">
      <div className="flex justify-between items-center py-5 px-4 md:px-20">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src="https://fakestoreapi.com/icons/logo.png" alt="" className="w-10 h-10" />
          <p className="font-bold text-lg">Ecommerce store</p>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-7 font-semibold items-center">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : ""}><li>Home</li></NavLink>
          <NavLink to="/all-products" className={({ isActive }) => isActive ? "text-blue-600" : ""}><li>All products</li></NavLink>
          <li>About</li>
          <li>Products</li>
        </ul>

        {/* Cart Icon */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute right-[-5px] bottom-[-5px] text-center cursor-pointer leading-4 w-4 aspect-square rounded-full text-[10px] text-white bg-black">
              {getCartCount()}
            </span>
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white  px-4 pb-4 ">
          <ul className="flex flex-col gap-4 font-semibold mt-2 ">
            <NavLink to="/" onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? "text-blue-600" : ""}><li>Home</li></NavLink>
            <NavLink to="/all-products" onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? "text-blue-600" : ""}><li>All products</li></NavLink>
            <li>About</li>
            <li>Products</li>
          </ul>
          <div>
              <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar