import "./App.css";
import Signin from "./Views/signin";
import Signup from "./Views/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Profile from "./Views/profile";
// import Test from "./Views/test";

import UploadProduct from "./Views/uploadProduct";
import HomePage from "./Views/homepage";
import Product from "./Views/product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/upload" element={<UploadProduct />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
