import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FunctionComponent } from "react";
import HomePage from "./pages/home/home.page";
import RegisterBillPage from "./pages/register/register.page";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterBillPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
