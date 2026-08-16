import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import axios from "axios";

function Category() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const decodedCategory = decodeURIComponent(category);

        const response = await axios.get(
          `http://localhost:5000/api/products/category/${encodeURIComponent(
            decodedCategory
          )}`
        );

        setProducts(response.data);
      } catch (error) {
        console.error(error);

        setError("Unable to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [category]);

  const categoryName = decodeURIComponent(category);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-8 py-12">

        {/* Header */}

        <div className="mb-10">

          <p className="text-sm text-indigo-600 font-semibold uppercase tracking-wider">
            Category
          </p>

          <h1 className="text-4xl font-bold text-slate-800 mt-2">
            {categoryName}
          </h1>

          <p className="text-slate-500 mt-2">
            Explore our collection of {categoryName} products.
          </p>

        </div>

        {/* Loading */}

        {loading && (
          <div className="text-center py-20">

            <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto" />

            <p className="mt-4 text-slate-500">
              Loading products...
            </p>

          </div>
        )}

        {/* Error */}

        {!loading && error && (
          <div className="text-center py-20">

            <h2 className="text-2xl font-semibold text-red-500">
              {error}
            </h2>

          </div>
        )}

        {/* No products */}

        {!loading && !error && products.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl shadow">

            <h2 className="text-2xl font-bold text-slate-700">
              No products found
            </h2>

            <p className="text-slate-500 mt-2">
              There are currently no products in this category.
            </p>

          </div>
        )}

        {/* Products */}

        {!loading && !error && products.length > 0 && (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}

          </div>

        )}

      </div>
    </Layout>
  );
}

export default Category;