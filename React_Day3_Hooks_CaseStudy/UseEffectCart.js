import React, { useState, useEffect } from 'react';

const UseEffectCart = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
      document.title = `Cart (${cartCount})`;
  }, [cartCount]);

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopping Cart</h1>
      <p>Items in cart: <strong>{cartCount}</strong></p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default UseEffectCart;
