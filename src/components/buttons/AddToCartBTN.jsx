'use client'

import { ShoppingCart, ShoppingCartIcon, } from 'lucide-react'
import React, { useState } from 'react'

function AddToCartBTN() {
    
    const [inCart, setInCart] = useState(false);
    
    const handleAddToCart = () => {
        setInCart(true)
    }


  return (

    <div>
        {/* Add to Cart - Primary Yellow Button */}
          <button onClick={handleAddToCart} className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all hover:scale-105 hover:bg-yellow-400 active:scale-95">
            {inCart ? <ShoppingCart size={22} strokeWidth={2.5} /> : <ShoppingCartIcon size={22} strokeWidth={2.5}/>} 
          </button>
    </div>
  )
}

export default AddToCartBTN

