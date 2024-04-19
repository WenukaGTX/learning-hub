import './productslist.scss';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from '../Button';
import icon1 from '../../images/icons/icon-65.png';



function ProductList() {
    const [products, setproducts] = useState(null);
  
    useEffect(() => {
      fetch('https://intuit-tp-bundlebitesize-api-staging.azurewebsites.net/api/v1/ProductSuite/products/info')
        .then(response => response.json())
        .then(data => setproducts(data))
        .catch(error => console.error('Error fetching data:', error));
  
        console.log('test');
    }, []);


    return (
      <div className='productslist-section'>
        <div className='wrapper'>
          <section className="section type0">
            <div className='content-area'>
              <h2>Find what's right for you</h2>
              
              <div className='filter-container'>
                <div className='filter-btn-area'>
                  <Button type="secondary selected" buttonText="By Product"></Button>
                  <Button type="secondary" buttonText="By Role"></Button>
                  <Button type="secondary" buttonText="By Purpose"></Button>
                </div>

                <div className='filter-body'>
                    <div className='list-section'>

                        <div className='product-list'>

                            {products && products.map(item => (
                                <div key={item.id} className='product-list-item'>
                                    <div className='item-body'>
                                        <div className='product-icon'>
                                            <img src={icon1} alt="icon1" />
                                        </div>
                                        <div className='product-details'>
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>

                                            
                                            <div className='tab-cta'>
                                                <Button type="secondary" buttonText="View course"></Button>
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
  