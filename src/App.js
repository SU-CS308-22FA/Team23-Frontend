import "./App.css";
import Signin from "./Views/signin";
import Signup from "./Views/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Profile from "./Views/profile";
import UploadProduct from "./Views/uploadProduct";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<UploadProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
