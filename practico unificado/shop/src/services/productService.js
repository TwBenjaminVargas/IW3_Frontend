
import { PRODUCTS_LIST_KEY } from "@/config/Constants"

let products = getStoredProducts();

function getStoredProducts()
{
    const data = localStorage.getItem(PRODUCTS_LIST_KEY)
    return data ? JSON.parse(data) : []
}

function saveProducts(newProducts)
{
  localStorage.setItem(PRODUCTS_LIST_KEY, JSON.stringify(newProducts))
  products = newProducts;
}

export const productService = 
{
  getProducts()
  {
    return products;
  },
  
  findProductById(id)
  {
    return products.find(product => product.id === id) || null;
  }
}
export function initMockProducts()
{
    if (!localStorage.getItem(PRODUCTS_LIST_KEY))
    {
         const mockProducts = [
            { id: 1, name: 'Laptop Pro', price: 1299.99, stock: 5, image: 'https://picsum.photos/200?1' },
            { id: 2, name: 'Wireless Mouse', price: 49.99, stock: 0, image: 'https://picsum.photos/200?2' },
            { id: 3, name: 'Mechanical Keyboard', price: 89.99, stock: 10, image: 'https://picsum.photos/200?3' },
            { id: 4, name: 'HD Monitor', price: 199.99, stock: 7, image: 'https://picsum.photos/200?4' },
            { id: 5, name: 'USB-C Hub', price: 29.99, stock: 15, image: 'https://picsum.photos/200?5' },
            { id: 6, name: 'Gaming Chair', price: 249.99, stock: 3, image: 'https://picsum.photos/200?6' },
            { id: 7, name: 'External SSD', price: 149.99, stock: 12, image: 'https://picsum.photos/200?7' },
            { id: 8, name: 'Noise Cancelling Headphones', price: 199.99, stock: 8, image: 'https://picsum.photos/200?8' },
            { id: 9, name: 'Smartphone Stand', price: 19.99, stock: 25, image: 'https://picsum.photos/200?9' },
            { id: 10, name: 'Portable Speaker', price: 59.99, stock: 9, image: 'https://picsum.photos/200?10' }
        ]   
        saveProducts(mockProducts)
    }
}
