import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../reducers/cartSlice";
// import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../reducers/productsApi";

const Home = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const dispatch = useDispatch();
  const history = useNavigate();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history.push("/cart");
  };
  return (
    <div class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <>
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                3 & Under Club
              </h1>
              <div class="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Welcome to our website for exotic car sales! Our inventory is small, exclusive, and curated for shoppers who are looking for something truly special. We understand that for many of our customers, it's all about speed and performance, which is why our selection of cars includes models that can go from 0-60 in less than 3 seconds. We invite you to explore our inventory and discover the car of your dreams.
            </p>
          </div>
          <div class="flex flex-wrap justify-center   -m-4">
            {data?.map((product) => (
              <div key={product.id} class="flex justify-center justify-items-center text-center xl:w-1/4 md:w-1/2 p-4  ">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-80 object-cover object-top mb-6"
                    src={product.img}
                    alt={product.name}
                  ></img>
                  <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                    Introducing
                  </h3>
                  <span>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                      {product.name}
                    </h2>
                  </span>
                  <span>
                    <p class="leading-relaxed text-base">{product.desc}</p>
                  </span>
                  <span>
                    <p class="leading-relaxed text-base">${product.price}</p>
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    class="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded"
                  >
                    add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  </div>
  );
};

export default Home;
