import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetailPage from "./components/pages/ProductDetailPage";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Cart from "./components/pages/Cart";
import BlogDetailPage from "./components/pages/BlogDetailPage";
import CheckOutPage from "./components/pages/CheckOutPage";
import WishListPage from "./components/pages/WishListPage";
import GoToTop from "./components/common/GoToTop/GoToTop";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import UserDashboard from "./components/pages/UserDashboard";
import ProtectedLogOutRoute from "./components/ProtectedLogOutRoute/ProtectedLogOutRoute";
import ProtectedLogInRoute from "./components/ProtectedLogInRoute/ProtectedLogInRoute";
import ForgetPass from "./components/pages/ForgetPass";
import ProtectedSignUpRoute from "./components/ProtectedSignUpRoute/ProtectedSignUpRoute";



const App = () => {
  
  return (
      <Provider store={store}>
        <GoToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="shop" element={<Shop />} />
          <Route exact path="shop/:id" element={<ProductDetailPage />} />
          <Route exact path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetailPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart/checkout" element={<CheckOutPage />} />
          <Route path="wishlist" element={<WishListPage />} />
          <Route
            path="signup"
            element={
              <ProtectedSignUpRoute>
                <SignUp />
              </ProtectedSignUpRoute>
            }
          />
          <Route
            path="login"
            element={
              <ProtectedLogInRoute>
                <Login />
              </ProtectedLogInRoute>
            }
          />
          <Route
            path="dashboard"
            element={
              <ProtectedLogOutRoute>
                <UserDashboard />
              </ProtectedLogOutRoute>
            }
          />
          <Route path="forget-password" element={<ForgetPass />} />
        </Routes>
      </Provider>
  );
};

export default App;
