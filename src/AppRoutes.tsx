import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import SteeringWheels from "./pages/SteeringWheels";
import Feedback from "./pages/Feedback";
import { VisibilityProvider } from "./AppContext";
import { CheckedProvider } from "./context";

export const AppRoutes = () => {
  return (
    <Router>
      <VisibilityProvider>
        <CheckedProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carros" element={<Cars />} />
            <Route path="/volantes" element={<SteeringWheels />} />
            <Route path="/feedbacks" element={<Feedback />} />
          </Routes>
        </CheckedProvider>
      </VisibilityProvider>
    </Router>
  );
};
