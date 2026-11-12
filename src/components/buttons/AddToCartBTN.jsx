'use client'

import { CartContext } from '@/context/CartProvider';
import { ShoppingCart, ShoppingCartIcon, } from 'lucide-react'
import React, { use, useState } from 'react'

function AddToCartBTN({food}) {
    
    const [inCart, setInCart] = useState(false);
    const { addToCart } = use(CartContext)
    
    const handleAddToCart = () => {
      addToCart(food)
        setInCart(true)
    }


  return (

    <div>
        {/* Add to Cart - Primary Yellow Button */}
          <button 
          onClick={handleAddToCart} 
          disabled={inCart}
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all hover:scale-105 hover:bg-yellow-400 active:scale-95 disabled:bg-black disabled:text-yellow-500">
            {inCart ? <ShoppingCart size={22} strokeWidth={2.5} /> : <ShoppingCartIcon size={22} strokeWidth={2.5}/>} 
          </button>
    </div>
  )
}

export default AddToCartBTN

