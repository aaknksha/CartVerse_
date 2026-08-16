import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../api/api";

function Search() {
  const [products, setProducts] = useState([]);

  const [searchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  useEffect(() => {
    if (keyword) {
      fetchProducts();
    }
  }, [keyword]);

  const fetchProducts = async () => {
    try {
      const { data } = await api.get("/search", {
        params: {
          keyword,
        },
      });

      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-8">
        Search Results
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;