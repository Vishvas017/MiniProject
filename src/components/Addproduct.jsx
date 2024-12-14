import React, { useState, useEffect } from 'react';

const Addproduct = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    price: '',
    description: ''
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/product');
        if (response.ok) {
          const data = await response.json();
          setProducts(data); // Load existing products
        } else {
          console.error('Error fetching products:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        alert('Product added successfully!');
        setProducts([...products, result]); // Use the response object
        setFormData({ image: '', name: '', price: '', description: '' });
      } else {
        console.error('Error adding product:', response.statusText);
        alert('Failed to add product.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          name='image' 
          placeholder='Image URL' 
          value={formData.image} 
          onChange={handleChange} 
        />
        <input 
          type='text' 
          name='name' 
          placeholder='Name' 
          value={formData.name} 
          onChange={handleChange} 
        />
        <input 
          type='text' 
          name='price' 
          placeholder='Price' 
          value={formData.price} 
          onChange={handleChange} 
        />
        <input 
          type='text' 
          name='description' 
          placeholder='Description' 
          value={formData.description} 
          onChange={handleChange} 
        />
        <button type='submit'>Add Product</button>
      </form>

      <h2>Product List</h2>
      <div>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
              <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              <p>{product.description}</p>
            </div>
          ))
        ) : (
          <p>No products added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Addproduct;
