import React, { useState, useEffect } from 'react';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/products',
        {
          method: "GET",
          mode: "cors", 
          headers: { 'Access-Control-Allow-Origin': "*", 
          "Content-Type": "application/json",}});
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);
  const addToCart = (productId) => {
    const selectedProduct = products.find(product => product.id === productId);
    setCart(prevCart => [...prevCart, selectedProduct]);
  };

  return (
    <section className="product-list">
      <h2>Product List</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id + "product"} className="product-item">
            <span>{product.name}</span>
            <span>${product.price}</span>
            {product.image_url && (
              <img
                src={product.image_url}
                alt={product.name}
                style={{ width: '150px', height: '150px' }}
              />
            )}
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
            </div>
            
         ))}
      </div>
     
    </section>
  );
}

export default ProductList;

