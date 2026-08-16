import { Link } from "react-router-dom";

const categories = [
  "Electronics",
  "Mobiles",
  "Accessories",
  "Fashion",
  "Books",
  "Home & Kitchen",
  "Sports",
  "Beauty",
];

function Categories() {
  return (
    <div className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/category/${encodeURIComponent(category)}`}
            className="px-5 py-2 rounded-full bg-gray-100 hover:bg-yellow-400 transition"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;