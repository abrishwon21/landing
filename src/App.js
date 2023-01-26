import "./App.css";
import Header from "./components/layout/header/Header";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/layout/footer/footer";

import AppRoute from "./utils/AppRoute";

function App() {
  return (
   

<Router className="App">
<Header/>
   <AppRoute/>
 <Footer/>
</Router>

   
  

  );
}

export default App;