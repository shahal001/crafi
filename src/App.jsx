import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./view/screens/Home";
import AboutUs from "./view/screens/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
