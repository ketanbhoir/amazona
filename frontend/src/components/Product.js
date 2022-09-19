import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';

// we have access through P compo passed in {p}
function Product(props) {
  const { product } = props;
  return (
    //  card compo comin from react bootstr compo

    <Card>
      {/* link the img with products details pg */}
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        {/*1. link the p.name with products details pg */}
        <Link to={`/product/${product.slug}`}>
          <Card.Title> {product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price} </Card.Text>
        <Button> Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
export default Product;
