// 2 get the slug from url an show it in the screen

import { useParams } from 'react-router-dom';

// use R.hooks from RRD called params
function ProductScreen() {
  const params = useParams();
  // get a slug from param
  const { slug } = params;
  //   product detail
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
export default ProductScreen;
