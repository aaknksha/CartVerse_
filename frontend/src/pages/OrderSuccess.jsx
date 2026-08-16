import { useLocation, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { FaCheckCircle } from "react-icons/fa";

function OrderSuccess() {

  const { state } = useLocation();

  return (

    <Layout>

      <div className="flex justify-center items-center min-h-[80vh]">

        <div className="bg-white shadow-xl rounded-3xl p-12 text-center">

          <FaCheckCircle
            className="text-emerald-500 mx-auto"
            size={80}
          />

          <h1 className="text-4xl font-bold mt-6">

            Order Successful!

          </h1>

          <p className="mt-4 text-lg">

            Order Number

          </p>

          <h2 className="text-2xl text-indigo-600 font-bold">

            {state?.orderNumber}

          </h2>

          <Link to="/">

            <button className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-xl">

              Continue Shopping

            </button>

          </Link>

        </div>

      </div>

    </Layout>
  );
}

export default OrderSuccess;