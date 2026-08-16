import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../services/api";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";

function Search() {
  const [products, setProducts] = useState([]);
  const [params] = useSearchParams();

  const keyword = params.get("keyword");

  useEffect(() => {
    if (keyword) {
      fetchProducts();
    } else {
      setProducts([]);
    }
  }, [keyword]);

  const fetchProducts = async () => {
    try {
      const res = await api.get(
        `/products/search?keyword=${encodeURIComponent(keyword)}`
      );

      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-8">

        <h2 className="text-3xl font-bold mb-8">
          Search Results
        </h2>

        {products.length === 0 ? (
          <h3 className="text-xl text-gray-500">
            No products found.
          </h3>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

export default Search;