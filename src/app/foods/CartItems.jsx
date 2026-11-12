"use client"
import { CartContext } from '@/context/CartProvider'
import React, { use } from 'react'

export default function CartItems() {
  const { cart } = use(CartContext)
  return (
    <div>{cart.length} items added</div>
  )
}
