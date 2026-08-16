import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Category from "../components/Categories";
import ProductGrid from "../components/ProductGrid";
import Categories from "../components/Categories";
import api from "../api/api";


function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await api.get("/products");
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div>
     <Layout>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">         </div>
      <Hero />
      <Categories />
      <ProductGrid />
      <Category />
    </Layout>
    </div>
  );
}


export default Home;
