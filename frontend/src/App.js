import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">amazona </a>
      </header>
      <main>
        <h1>Featured products</h1>
        {/* rendering the products */}

        {/* // convert each product to a jsx */}
        {/* a classname of products & product 4 arrange */}
        <div className="products">
          {data.products.map((product) => (
            // creatin a unique key for child element in list
            <div className="product" key={product.slug}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add to Cart </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
