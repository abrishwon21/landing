import "./App.css";
import Navbar from "./components/layout/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Home/>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/products" />
        <Route path="/contact" />
        <Route path="/about" />
      </Routes>
    </Router>
  );
}

export default App;