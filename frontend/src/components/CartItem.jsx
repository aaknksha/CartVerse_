import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition p-6">

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Product */}

        <div className="flex items-center gap-5 flex-1">

          <div className="bg-slate-100 p-4 rounded-2xl">

            <img
              src={item.image}
              alt={item.name}
              className="w-28 h-28 object-contain"
            />

          </div>

          <div>

            <h2 className="text-xl font-bold text-slate-800">
              {item.name}
            </h2>

            <p className="mt-2 text-indigo-700 text-2xl font-bold">
              ₹{item.price.toLocaleString()}
            </p>

            <p className="text-slate-500 mt-1">
              Unit Price
            </p>

          </div>

        </div>

        {/* Quantity */}

        <div className="flex items-center bg-slate-100 rounded-full overflow-hidden">

          <button
            onClick={() =>
              decreaseQuantity(item._id, item.quantity)
            }
            className="
              w-12
              h-12
              flex
              items-center
              justify-center
              hover:bg-red-500
              hover:text-white
              transition
            "
          >
            <FaMinus />
          </button>

          <span className="w-14 text-center font-bold text-lg">
            {item.quantity}
          </span>

          <button
            onClick={() =>
              increaseQuantity(item._id, item.quantity)
            }
            className="
              w-12
              h-12
              flex
              items-center
              justify-center
              hover:bg-emerald-500
              hover:text-white
              transition
            "
          >
            <FaPlus />
          </button>

        </div>

        {/* Total */}

        <div className="text-center">

          <p className="text-slate-500">
            Total
          </p>

          <h3 className="text-2xl font-bold text-emerald-600">

            ₹{(item.price * item.quantity).toLocaleString()}

          </h3>

        </div>

        {/* Delete */}

        <button
          onClick={() => removeItem(item._id)}
          className="
            w-12
            h-12
            rounded-full
            bg-red-50
            text-red-600
            hover:bg-red-600
            hover:text-white
            transition
          "
        >
          <FaTrash className="mx-auto" />
        </button>

      </div>

    </div>
  );
}

export default CartItem;