import "./App.css";
import Signin from "./Views/signin";
import Signup from "./Views/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Views/profile";
// import Test from "./Views/test";
import Search from "./Views/search";

import HomePage from "./Views/homepage";

import Product from "./Views/product";

import AdminPage from "./Views/adminpage";
import TeamPage from "./Views/teampage";
import ActiveBids from "./Views/activebid";
import WonAuctions from "./Views/wonAuctions";

import Authenticate from "./Views/authenticate";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/teams/:teamName" element={<TeamPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/activebids/:email" element={<ActiveBids />} />
        <Route path="/wonAuctions/:email" element={<WonAuctions />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/myproducts/:email" element={<MyProducts />} />

        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/team/:id" element={<AdminPage />} />
        <Route path="/authenticate" element={<Authenticate />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
