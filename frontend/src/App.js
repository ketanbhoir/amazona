import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        {/* convertin our hed 2 bootstraphead */}
        <header>
          <Navbar bg="dark" variant="dark">
            {/* sets elem in rows */}
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>amazona</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          {/* 1st route 4 homescreen */}
          {/* 2nd R 4 product screen */}
          <Container>
            <Routes>
              {/* : 4 defining a para */}
              <Route path="/product/:slug" element={<ProductScreen />} />
              {/* setting to a jsx element HS */}
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
