import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FunctionComponent } from "react";
import HomePage from "./pages/home/home.page";
import RegisterBillPage from "./pages/register/register.page";
import LoginPage from "./pages/login/login.page";
import SuportPage from "./pages/suport/suport.page";
import StarRatingPage from "./pages/rating/rating.page";
import ClientListPage from "./pages/clients/client.page";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterBillPage />} />
        <Route path="/clients" element={<ClientListPage />} />
        <Route path="/rating" element={<StarRatingPage />} />
        <Route path="/suport" element={<SuportPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
