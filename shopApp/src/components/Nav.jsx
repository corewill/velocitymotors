import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const { totalProducts } = useSelector((state) => state.cart);
  return (
    <header class="text-gray-600 bg-blue-500 body-font">
      <div class="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span class="ml-3 text-xl">Velocity Motors</span>
        </Link>

        <Link
          to="/cart"
          class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Cart
          <i class="fa-solid fa-bag-shopping px-1"></i>
          <span className="bag-quantity" class="bg-green-600 px-1 rounded-lg">
            <span>{totalProducts}</span>
          </span>
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
