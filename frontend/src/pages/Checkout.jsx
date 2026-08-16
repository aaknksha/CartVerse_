import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";
import api from "../api/api";
import toast from "react-hot-toast";

function Checkout() {
  const navigate = useNavigate();

  const {
    cartItems,
    totalPrice,
    loadCart
  } = useCart();

  const [form, setForm] = useState({
    customerName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async () => {
    if (cartItems.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    try {
      const { data } = await api.post("/orders", {
        ...form,
        items: cartItems,
        totalAmount: totalPrice,
      });

      // Clear cart
      for (const item of cartItems) {
        await api.delete(`/cart/${item._id}`);
      }

      await loadCart();

      toast.success("Order Placed Successfully");

      navigate("/success", {
        state: data,
      });

    } catch (err) {
      console.log(err);

      toast.error("Unable to place order");
    }
  };

  return (
    <Layout>

      <div className="max-w-5xl mx-auto py-12">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h1 className="text-4xl font-bold mb-8">
            Checkout
          </h1>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              name="customerName"
              placeholder="Full Name"
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

            <input
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

            <textarea
              name="address"
              placeholder="Delivery Address"
              rows="5"
              onChange={handleChange}
              className="border rounded-xl p-4 md:col-span-2"
            />

          </div>

          <div className="mt-8 flex justify-between items-center">

            <h2 className="text-3xl font-bold text-indigo-700">

              ₹{totalPrice.toLocaleString()}

            </h2>

            <button

              onClick={placeOrder}

              className="bg-gradient-to-r from-indigo-600 to-emerald-500 text-white px-10 py-4 rounded-xl"

            >

              Place Order

            </button>

          </div>

        </div>

      </div>

    </Layout>
  );
}

export default Checkout;