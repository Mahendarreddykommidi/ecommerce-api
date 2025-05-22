import { Toaster } from "react-hot-toast";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Allproducts from "./pages/Allproducts";
import Productsdisplay from "./pages/Productsdisplay";
import Product from "./pages/Product";


function App() {
  return (
    <>
      <Toaster />
         
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/all-products" element={<Allproducts />}></Route>
             <Route path="/product/:id" element={<Product />}></Route>
                
        
          
    

        

  
           
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
