import {createContext , useContext, ReactNode, useState} from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'


type ChildrenType = {
    children:ReactNode
}

type CartItemType = {
    id:number,
    quantity: number
}

type ShoppinfCartContextType = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartItemsQuantity :number;
    cartItems: CartItemType[]
}

 const ShoppingCartContext = createContext({} as ShoppinfCartContextType)

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({children}: ChildrenType) => {

  const [cartItems, setCartItems] = useLocalStorage<CartItemType[]>( "shopping-cart",[])

    const getItemQuantity = (id:number) => { //id = 1
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number) { //id = 1
        setCartItems(currItems => {
          if (currItems.find(item => item.id === id) == null) {
            return [...currItems, { id: id, quantity: 1 }]
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
              } else {
                return item
              }
            })
          }
        })
      }

      function decreaseCartQuantity(id: number) { //id = 1
        setCartItems(currItems => {
          if (currItems.find(item => item.id === id)?.quantity === 1) {
            return currItems.filter(item => item.id !== id)
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
              } else {
                return item
              }
            })
          }
        })
      }

      function removeFromCart(id: number) {
        setCartItems(currItems => {
          return currItems.filter(item => item.id !== id)
        })
      }

      const cartItemsQuantity = cartItems.reduce((quantity,item)=>{ return item.quantity + quantity }, 0 )

    return(
        <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItemsQuantity, cartItems}}>
            { children }
           
        </ShoppingCartContext.Provider>
    )
}  