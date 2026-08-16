import Layout from "../components/Layout";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";

function Cart() {
  const { cartItems, totalPrice } = useCart();

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen py-12">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="flex items-center gap-3 mb-10">

            <div className="bg-indigo-600 p-3 rounded-xl text-white">
              <FaShoppingCart size={24} />
            </div>

            <div>
              <h1 className="text-4xl font-bold text-slate-800">
                My Cart
              </h1>

              <p className="text-slate-500">
                {totalItems} Item(s) in your shopping cart
              </p>
            </div>

          </div>

          {cartItems.length === 0 ? (

            <div className="bg-white rounded-3xl shadow-lg p-20 text-center">

              <img
                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                alt="Empty Cart"
                className="w-36 mx-auto mb-8"
              />

              <h2 className="text-3xl font-bold text-slate-700">
                Your Cart is Empty
              </h2>

              <p className="text-slate-500 mt-3">
                Looks like you haven't added anything yet.
              </p>

              <Link to="/">

                <button
                  className="
                  mt-8
                  px-8
                  py-3
                  rounded-full
                  bg-indigo-600
                  hover:bg-indigo-700
                  text-white
                  flex
                  items-center
                  gap-2
                  mx-auto
                  transition
                "
                >
                  <FaArrowLeft />
                  Continue Shopping
                </button>

              </Link>

            </div>

          ) : (

            <div className="grid lg:grid-cols-3 gap-8">

              {/* Cart Items */}

              <div className="lg:col-span-2 space-y-5">

                {cartItems.map((item) => (
                  <CartItem
                    key={item._id}
                    item={item}
                  />
                ))}

              </div>

              {/* Summary */}

              <div className="sticky top-24 h-fit">

                <div className="bg-white rounded-3xl shadow-xl p-8">

                  <h2 className="text-2xl font-bold text-slate-800">
                    Order Summary
                  </h2>

                  <hr className="my-6" />

                  <div className="flex justify-between mb-4">

                    <span className="text-slate-600">
                      Total Items
                    </span>

                    <span className="font-semibold">
                      {totalItems}
                    </span>

                  </div>

                  <div className="flex justify-between mb-4">

                    <span className="text-slate-600">
                      Delivery
                    </span>

                    <span className="text-emerald-600 font-semibold">
                      FREE
                    </span>

                  </div>

                  <div className="flex justify-between mb-6">

                    <span className="text-xl font-bold">
                      Total
                    </span>

                    <span className="text-3xl font-bold text-indigo-700">
                      ₹{totalPrice.toLocaleString()}
                    </span>

                  </div>

                  <Link to="/checkout">

                    <button
                      className="
                      w-full
                      py-4
                      rounded-xl
                      bg-gradient-to-r
                      from-indigo-600
                      to-emerald-500
                      hover:scale-105
                      transition
                      text-white
                      font-semibold
                      shadow-lg
                    "
                    >
                      Proceed to Checkout
                    </button>

                  </Link>

                  <Link to="/">

                    <button
                      className="
                      w-full
                      mt-4
                      py-3
                      rounded-xl
                      border
                      border-indigo-600
                      text-indigo-700
                      hover:bg-indigo-50
                      transition
                    "
                    >
                      Continue Shopping
                    </button>

                  </Link>

                </div>

              </div>

            </div>

          )}

        </div>

      </div>

    </Layout>
  );
}

export default Cart;