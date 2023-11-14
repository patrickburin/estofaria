import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Interiors from "./pages/Interiors";
import SteeringWheels from "./pages/SteeringWheels";
import Feedback from "./pages/Feedback";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carros" element={<Cars />} />
        <Route path="/interiores" element={<Interiors />} />
        <Route path="/volantes" element={<SteeringWheels />} />
        <Route path="/feedbacks" element={<Feedback />} />
      </Routes>
    </Router>
  );
};
