import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./index.css";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Shopi
            </Link>
          </div>
          <div>
            <Link to="cart.html">
              Cart
              {cartItems.length > 0 && (
                <span className="badge"> {cartItems.length}</span>
              )}
            </Link>
            <Link to="signin.html">Sign In</Link>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route path="/" element={<HomeScreen />} exact></Route>
            <Route path="/cart/:id" element={<CartScreen />} />
          </Routes>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
