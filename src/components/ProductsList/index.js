import './productslist.scss';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from '../Button';
import icon1 from '../../images/icons/icon-65.png';

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
    <div className='productslist-section'>
      <div className='wrapper'>
        <section className="section type0">
          <div className='content-area'>
            <h2>Find what's right for you</h2>
            <div className='filter-container'>
              <div className='filter-btn-area'>
                <Button type={`secondary ${selectedCategory === null ? 'selected' : ''}`} buttonText="All" onClick={() => handleCategoryClick(null)}></Button>
                <Button type={`secondary ${selectedCategory === 1 ? 'selected' : ''}`} buttonText="By Product" onClick={() => handleCategoryClick(1)}></Button>
                <Button type={`secondary ${selectedCategory === 2 ? 'selected' : ''}`} buttonText="By Role" onClick={() => handleCategoryClick(2)}></Button>
                <Button type={`secondary ${selectedCategory === 3 ? 'selected' : ''}`} buttonText="By Purpose" onClick={() => handleCategoryClick(3)}></Button>
              </div>
              <div className='filter-body'>
                <div className='list-section'>
                  <div className='product-list'>
                    {filteredItems && filteredItems.map(item => (
                      <div key={item.id} className='product-list-item'>
                        <div className='item-body'>
                          <div className='product-icon'>
                            <img src={icon1} alt="icon1" />
                          </div>
                          <div className='product-details'>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <div className='tab-cta'>
                              <Link to={`/course-details/${item.id}`}>View course</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='view-more-area'>
              <h3>Not sure what do you need?</h3>
              <Link to='/course-details' ><Button type="primary" buttonText="View all courses"></Button></Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductList;
