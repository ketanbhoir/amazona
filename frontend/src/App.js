import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">amazona </a>
      </header>
      <main>
        <h1>Featured products</h1>
        {/*1. rendering the products */}

        {/* 2.// convert each product to a jsx */}
        {/*3. a classname of products & product 4 arrangement in css */}
        <div className="products">
          {data.products.map((product) => (
            //A slug is the part of a URL that identifies a particular page on a website in an easy-to-read form.
            //    creatin a unique key ement in list

            //   1. A slug is the part of a URL that identifies a particular page on a website in an easy-to-read form.
            //   2. creatin a unique key for child element in list
            <div className="product" key={product.slug}>
              {/* link the img with products details pg */}
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>

              <div className="product-info">
                {/*1. link the p.name with products details pg */}
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
