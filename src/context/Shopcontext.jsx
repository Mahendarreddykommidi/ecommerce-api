

import { createContext, useEffect, useState,   } from "react";
import toast from "react-hot-toast";

export const ShopContext = createContext();


export const ShopcontextProvider = (props) => {

    const [products, setProducts] = useState([]);
    
      const [cartItems,setCartItems]=useState({})
    
      useEffect(() => {
      
        const fetchProducts = async () => {
          try {
            const res = await fetch("https://fakestoreapi.com/products")
            
            const productList = await res.json();
            setProducts(productList);
          } catch (err) {
          
              setError(err.message);
              console.error('Error fetching products:', err);

          } finally {
            setLoading(false);
          }
        };
    
        fetchProducts();
    
      
      }, []);
    


const currency ="$"
const deliveryfee="$"
 

  const addToCart =  (itemId) => {

    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
        cartData[itemId] += 1;
    }
    else {
        cartData[itemId] = 1;
    }
    setCartItems(cartData);
    console.log("item added to cart")

    toast.success("item added to cart",cartData)

}
const removeFromCart =  (itemId) => {

    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
        cartData[itemId] -= 1;
        if(cartData[itemId]===0){
            delete(cartData[itemId])

        
        }
    }
   
  
    setCartItems(cartData);
  toast.error("item removed from cart")

}
const updateCartQuantity =  (itemId, quantity) => {

    let cartData = structuredClone(cartItems);
    if (quantity === 0) {
        delete cartData[itemId];
    } else {
        cartData[itemId] = quantity;
    }
    setCartItems(cartData)
    toast.success("cart updated")

}


const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
        if (cartItems[items] > 0) {
            totalCount += cartItems[items];
        }
    }
    return totalCount;
}

const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
        let itemInfo = products.find((product) => product.id === items);
        if (cartItems[items] > 0) {
            totalAmount += itemInfo.price * cartItems[items];
        }
    }
    return Math.floor(totalAmount * 100) / 100;
}






   

    const value = {
      addToCart,removeFromCart,
      updateCartQuantity,deliveryfee,
      cartItems,setCartItems,
      getCartCount,getCartAmount,
      products,setProducts,currency

    
        
        

       
    }

    return (
      <ShopContext.Provider value={value}>
        {props.children}

      </ShopContext.Provider>
    )
}
