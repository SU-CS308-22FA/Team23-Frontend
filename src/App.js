import "./App.css";
import Signin from "./Views/signin";
import Signup from "./Views/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Profile from "./Views/profile";
// import Test from "./Views/test";
import Search from "./Views/search";

import UploadProduct from "./Views/uploadProduct";
import HomePage from "./Views/homepage";

import Product from "./Views/product";

import AdminPage from "./Views/adminpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/team" element={<AdminPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/upload" element={<UploadProduct />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/team/:id" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
