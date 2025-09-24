import { CART_KEY } from "@/config/Constants";
import { ref } from "vue";

let cart = ref(getStoredCart());

function saveCart()
{
  localStorage.setItem(CART_KEY, JSON.stringify(cart.value))
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
    cart.value.push(product)
    saveCart()
  },

  getCart()
  {
    return cart;
  },

  removeFromCart(productId)
  {
    cart.value = cart.value.filter(p => p.id !== productId)
    saveCart()
  },
  
  isInCart(productId)
  {
    return cart.value.some(p => p.id === productId)
  }
}