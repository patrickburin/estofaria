import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cars from "./pages/Cars";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carros" element={<Cars />} />
      </Routes>
    </Router>
  );
};
