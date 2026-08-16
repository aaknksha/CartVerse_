import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await api.get(`/products/${id}`);
      setProduct(res.data);
    };

    fetchProduct();
  }, [id]);

  if (!product)
    return (
      <h1 className="text-center mt-20">
        Loading...
      </h1>
    );

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">

      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl shadow"
        />

        <div>

          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <h2 className="text-3xl mt-4 text-green-600">
            ₹{product.price}
          </h2>

          <p className="mt-5">
            {product.description}
          </p>

          <p className="mt-5">
            <strong>Brand:</strong> {product.brand}
          </p>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>
            <strong>Stock:</strong> {product.stock}
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-8">
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;