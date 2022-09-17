import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          {/* we use link inted of a tag coz we want no pg refresh */}
          <Link to="/">amazona </Link>
        </header>
        <main>
          {/* 1st route 4 homescreen */}
          {/* 2nd R 4 product screen */}
          <Routes>
            {/* : 4 defining a para */}
            <Route path="/product/:slug" element={<ProductScreen />} />
            {/* setting to a jsx element HS */}
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
