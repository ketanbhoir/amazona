import { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// checks the state n look 4 any errors
import logger from 'use-reducer-logger';
// import data from '../data';

// 1. accepts 2 par current state & the action whicj is reqi 2 change the state
// 2. payload is where the data is stored
// 3.cretin 3 reducer funtn..
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  // using redu in HS....
  // [def a reducer] , accept 2 para
  //  dispatch 2 call n action n updat a state, set it to = ..
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });

  // 2. UseEF is a r.hook
  // accepts 2 para 1st a fntn 2nd an empt array(coz we gona run a funtn only 1 time after renderin the component)
  // using dispatch in useEffect 2 update the state
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setProducts(result.data);
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
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((product) => (
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
          ))
        )}
      </div>
    </div>
  );
}
export default HomeScreen;
