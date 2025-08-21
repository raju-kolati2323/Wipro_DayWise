import React, { useEffect, useState } from 'react';

const ECommerce = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        const uniqueCategories = [...new Set(data.map(p => p.category))];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product details.");
        setLoading(false);
      });
  }, []);

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setCategory(selected);

    if (selected === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(p => p.category === selected);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div align="center">
      <h2>
        E-Commerce Product Listing{' '}
        <select value={category} onChange={handleCategoryChange}>
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Image</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((p) => (
              <tr key={p.id}>
                <td>{p.title}</td>
                <td>${p.price}</td>
                <td>
                  <img src={p.image} alt={p.title} height="50px" />
                </td>
                <td>{p.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ECommerce;
