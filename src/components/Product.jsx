import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Description from './description';

const Product = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get('http://localhost:3000/product')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
   
      <h1>Product</h1>
      <div style={styles.gridContainer}>
        {data.map((el) => (
          <div key={el.id} style={styles.card}>
            <div style={styles.id}>ID: {el.id}</div>
            <img src={el.image} alt={el.title} style={styles.image} />
            <h2 style={styles.title}>{el.title}</h2>
            <h4 style={styles.description}>{el.description}</h4>
            <h2 style={styles.price}>${el.price}</h2>
          </div>
          
        ))}
        
      </div>
    </div>
  );
};

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  id: {
    fontSize: '14px',
    color: '#555',
  },
  image: {
    height: '200px',
    width: '200px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  title: {
    fontSize: '18px',
    color: '#333',
    margin: '10px 0',
  },
  description: {
    fontSize: '14px',
    color: '#666',
  },
  price: {
    fontSize: '20px',
    color: '#28a745',
    fontWeight: 'bold',
  },
};

export default Product;


