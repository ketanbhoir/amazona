import { useEffect, useReducer } from 'react';
import axios from 'axios';
// checks the state n look 4 any errors
// A very basic logger for the useReducer function in the React Hooks API.
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import ProductScreen from './ProductScreen';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

// 1. accepts 3 argu:- include reducer, current state & the action whicj is reqi 2 change the state
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
  // URLogger we can debug our state n find issue init
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });

  // 2. UseEF is a r.hook to fetch dta
  // def 2 state 1 cureent and 2 the funtn which update the current state
  // accepts 2 para 1st a fntn 2nd an empt array(coz we gona run a funtn only 1 time after renderin the component)
  // using dispatch in useEffect 2 update the state
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        // callin axios 2 send n ajax req to this addre
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
      <Helmet>
        <title>Amazona</title>
      </Helmet>
      <h1>Featured products</h1>
      {/*1. rendering the products */}

      {/* 2.// convert each product to a jsx */}
      {/*3. a classname of products & product 4 arrangement in css */}
      {/* the className attribute is used to set or return the value of an element’s class attribute. Using this property, the user can change the class of an element to the desired class. */}
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          // using R & C from bootstrap can put items nxt 2 each in a row
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                {/* def a prod comp P , prod attri p*/}
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
export default HomeScreen;
