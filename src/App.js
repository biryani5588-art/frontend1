import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AboutPage from './pages/about';
import BlogPage from './pages/Blog';
import ShopPage from './pages/shop';
import CollectionPage from './pages/Collection';
import CartPage from './pages/cart';
import ContactPage from './pages/contact';
import PaymentSuccess from './pages/successfull';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/about-us" element={<AboutPage />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route path="/collections" element={<CollectionPage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/payment-success/:orderId" element={<PaymentSuccess  />} />





      </Routes>
    </Router>
    </>
  );
}

export default App;
