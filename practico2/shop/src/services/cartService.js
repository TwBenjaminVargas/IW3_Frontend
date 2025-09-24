import { CART_KEY } from "@/config/Constants";

let cart = getStoredCart();

function saveCart()
{
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
}

function getStoredCart()
{
    const data = localStorage.getItem(CART_KEY)
    return data ? JSON.parse(data) : []
}

export const cartService =
{
  addToCart(product)
  {
    cart.push(product)
    saveCart()
  },

  getCart()
  {
    return cart;
  },

  removeFromCart(productId)
  {
    cart = cart.filter(p => p.id !== productId)
    saveCart()
  },
}