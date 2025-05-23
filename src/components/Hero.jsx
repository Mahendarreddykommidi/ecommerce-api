import React, { useState } from 'react';

export default function Hero() {

  
  return (
    <div>
     <div className="header flex flex-col items-start md:flex-row md:items-center justify-between md:mx-10 bg-[#E6E9F2] my-10">
      <div className="header-content  font-semibold mx-10 flex flex-col gap-4 space-y-6">
       <h2 className='text-2xl'> Power Meets Elegance - Apple MacBook Pro is Here for you!</h2>
       <p>Limited Time Offer 30% Off</p>
       <p>Explore all products</p>
       <div className="buttons flex items-center gap-3">
       <button className='bg-orange-600 px-6 py-2 text-white rounded-lg'>Buy now</button>
       <button className='border rounded-lg px-4 py-2'>Find more</button>
       </div>
     

      </div>
      <div className="header-image">
      <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/rzri7kytphxalrm9rubd.webp" alt="" className='' />
      </div>
     </div>


    </div>
    
       
    
  );
}