import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow p-4">

      <img
        src={product.image}
        alt={product.name}
        className="h-52 w-full object-contain"
      />

      <h2 className="mt-4 font-semibold">
        {product.name}
      </h2>

      <p className="text-xl font-bold text-green-600">
        ₹{product.price}
      </p>

      <Link to={`/product/${product._id}`}>
        <button
  onClick={() => addToCart(product)}
  className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4"
>
  Add To Cart
</button>
      </Link>

    </div>
  );
}

export default ProductCard;