import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../api/api";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from Cart Service
  const loadCart = async () => {
    try {
      const { data } = await api.get("/cart");
      setCartItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  // Add Product
  const addToCart = async (product) => {
    try {
      await api.post("/cart", {
        productId: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
      });

      toast.success("Added to Cart");

      loadCart();
    } catch (error) {
      console.error(error);
      toast.error("Unable to add product");
    }
  };

  // Increase Quantity
  const increaseQuantity = async (id, quantity) => {
    try {
      await api.put(`/cart/${id}`, {
        quantity: quantity + 1,
      });

      loadCart();
    } catch (error) {
      console.error(error);
    }
  };

  // Decrease Quantity
  const decreaseQuantity = async (id, quantity) => {
    try {
      if (quantity <= 1) {
        await removeItem(id);
        return;
      }

      await api.put(`/cart/${id}`, {
        quantity: quantity - 1,
      });

      loadCart();
    } catch (error) {
      console.error(error);
    }
  };

  // Remove Item
  const removeItem = async (id) => {
    try {
      await api.delete(`/cart/${id}`);

      toast.success("Removed");

      loadCart();
    } catch (error) {
      console.error(error);
    }
  };

  // Total
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        totalPrice,
        loadCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}