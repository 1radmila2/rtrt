import React, { useState, useEffect } from 'react';
import './ProductList.css';

function ProductList({ products, selectedCategory, searchQuery }) {
 

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id + 'product'} className="product-item">
            <span>{product.name}</span>
            <span>${product.price}</span>
            <span>{product.category}</span>
            {product.image_url && (
              <img
                src={product.image_url}
                alt={product.name}
                style={{ width: '150px', height: '150px' }}
              />
            )}
            <button >Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

