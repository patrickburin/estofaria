import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};
