import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import data from '../data';

function HomeScreen() {
  // 1. def a state to save products from BE
  // usesate a react hook
  // the useState return a var "p" & a funtn "Sp" to update this var
  const [products, setProducts] = useState([]);

  // 2. UseEF is a r.hook
  // accepts 2 para 1st a fntn 2nd an empt array(coz we gona run a funtn only 1 time after renderin the component)
  useEffect(() => {
    const fetchData = async () => {
      // 3.callin from this method an sendin n ajax req 2 this address
      const result = await axios.get('/api/products');
      setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Featured products</h1>
      {/*1. rendering the products */}

      {/* 2.// convert each product to a jsx */}
      {/*3. a classname of products & product 4 arrangement in css */}
      <div className="products">
        {products.map((product) => (
          //A slug is the part of a URL that identifies a particular page on a website in an easy-to-read form.
          //    creatin a unique key ement in list

          //   1. A slug is the part of a URL that identifies a particular page on a website in an easy-to-read form.
          //   2. creatin a unique key for child element in list
          <div className="product" key={product.slug}>
            {/* link the img with products details pg */}
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>

            <div className="product-info">
              {/*1. link the p.name with products details pg */}
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to Cart </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
