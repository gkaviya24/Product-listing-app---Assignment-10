import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow p-4 flex flex-col justify-between h-full">
      <img src={product.image} alt={product.title} className="h-40 mx-auto mb-2 object-contain" />
      <h3 className="font-bold text-base mb-1">{product.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{product.category}</p>
      <p className="text-lg font-semibold text-green-600">${product.price}</p>
      <p className="text-sm text-yellow-500">Rating: {product.rating.rate}</p>
    </div>
  );
}

export default ProductCard;
