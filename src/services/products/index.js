import './products.scss';

import icon1 from '../../images/icons/il_utl_laptop.png';

import React, { useState, useEffect } from 'react';

function MyProducts() {
  const [products, setproducts] = useState(null);

  useEffect(() => {
    fetch('https://661783abed6b8fa43482d698.mockapi.io/intuit/training/reactjs/products')
      .then(response => response.json())
      .then(data => setproducts(data))
      .catch(error => console.error('Error fetching data:', error));

      console.log('test');
  }, []);


  return (
    <div className='list-content'>
        <div className='product-list'>
          {products && products.map(item => (
            <div key={item.id} className='product-list-items'>
              <div>
                <img src={icon1} alt="icon1" />
              </div>
              <h4>{item.title}</h4> 
              <p>{item.description}</p> 
            </div>
          ))}

        </div>
      </div>
  );
}


export default MyProducts;
