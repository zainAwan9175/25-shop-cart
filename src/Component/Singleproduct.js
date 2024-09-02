import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pageheader from './Header/Pageheader';
import products from './Product';
import Leftinformition from './Leftinformition';
import Poplerpost from './Poplerpost';
import Review from './Review';

function Singleproduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Filter the product based on the id parameter
    const result = products.filter((element) => element.id === id);
    // Set the filtered product to the state
    setProduct(result[0]); // Since filter returns an array, get the first item
  }, [id]); // Trigger the effect whenever id changes

  return (
    <div className='flex flex-col gap-10 mb-10'>
      <Pageheader title="Our Shop Single" current="Shop / Single product" />
      {/* Render the product details */}
      {product && (
        <div className='flex flex-col md:flex-row md:justify-center md:items-center md:gap-10 gap-5'>
          <Leftinformition product={product} />
          <Poplerpost />
        </div>
      )}
      <div>
        <Review />
      </div>
    </div>
  );
}

export default Singleproduct;

