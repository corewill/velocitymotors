import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {   addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart, } from "../reducers/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const addToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const removeFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.items.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.items &&
              cart.items.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-product">
                    <img src={item.img} alt={item.name} />
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
                      <button onClick={() => removeFromCart(item)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">{item.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseCart(item)}>
                      -
                    </button>
                    <div className="count">{item.totalProducts}</div>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ${item.price * cart.totalProducts}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.totalBalance}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
              <div className="continue-shopping">
                <Link to="/">
                  
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;