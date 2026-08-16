import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaSearch,
  FaStore,
  FaUserCircle,
} from "react-icons/fa";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleSearch = () => {
  if (!search.trim()) return;

  navigate(`/search?keyword=${encodeURIComponent(search)}`);
};

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-3xl font-bold text-indigo-700"
          >
            <FaStore className="text-emerald-500" />
            CartVerse
          </Link>

          {/* Search */}
          <div className="hidden md:flex w-[420px]">

           <input
  type="text"
  placeholder="Search laptops, mobiles..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") handleSearch();
  }}
  className="flex-1 rounded-l-full border px-5 py-3"
/>

           <button
  onClick={handleSearch}
  className="bg-indigo-700 px-6 rounded-r-full hover:bg-indigo-800 text-white"
>
  <FaSearch />
</button>

          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6">

            <NavLink
              to="/"
              className="hover:text-indigo-700 font-medium"
            >
              Home
            </NavLink>

            <NavLink
              to="/cart"
              className="relative hover:text-indigo-700"
            >
              <FaShoppingCart size={22} />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-emerald-500 text-white text-xs px-2 rounded-full">
                  {cartCount}
                </span>
              )}
            </NavLink>

            <FaUserCircle
              size={26}
              className="text-slate-700 cursor-pointer hover:text-indigo-700"
            />

          </div>

        </div>

      </nav>

      {/* Categories Bar */}
      <div className="bg-indigo-700 text-white shadow">

        <div className="max-w-7xl mx-auto flex justify-center gap-8 py-3 flex-wrap">

          <NavLink to="/category/Electronics">Electronics</NavLink>

          <NavLink to="/category/Mobiles">Mobiles</NavLink>

          <NavLink to="/category/Fashion">Fashion</NavLink>

          <NavLink to="/category/Books">Books</NavLink>

          <NavLink to="/category/Home%20%26%20Kitchen">
            Home & Kitchen
          </NavLink>

          <NavLink to="/category/Sports">Sports</NavLink>

          <NavLink to="/category/Beauty">Beauty</NavLink>

        </div>

      </div>
    </>
  );
}

export default Navbar;