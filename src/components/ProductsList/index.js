import './productslist.scss';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from '../Button';

function ProductList() {
  const [products, setproducts] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch('https://661783abed6b8fa43482d698.mockapi.io/intuit/training/reactjs/products')
      .then(response => response.json())
      .then(data => setproducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredItems = selectedCategory
    ? products.filter(product => product.categoryArray.includes(selectedCategory))
    : products;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className='section-padding bt-ash' id='productListHome'>
      <div className='container'>
        <h2 className='mb-4 text-center'>Find what's right for you</h2>
        <div>
          <div className='filter-buttons mb-2'>
            <Button className={selectedCategory === null ? 'selected' : ''} buttonText="All" onClick={() => handleCategoryClick(null)}></Button>
            <Button className={selectedCategory === 1 ? 'selected' : ''} buttonText="By Product" onClick={() => handleCategoryClick(1)}></Button>
            <Button className={selectedCategory === 2 ? 'selected' : ''} buttonText="By Role" onClick={() => handleCategoryClick(2)}></Button>
            <Button className={selectedCategory === 3 ? 'selected' : ''} buttonText="By Purpose" onClick={() => handleCategoryClick(3)}></Button>
          </div>
          <div className='row'>
            {filteredItems && filteredItems.map(item => (
              <div key={item.id} className='col-2 mb-2'>
                <div className='product'>
                  <img src='https://placehold.co/80' className='product-image' alt='product item' />
                  <div className='product-details'>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <Link to={`/course-details/${item.id}`} className='button mt-auto'>View course</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='text-center mt-2'>
            <h4 className='mb-2'>Not sure what do you need?</h4>
            <Link to='/course-details' className='button button-primary'>View all courses</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
