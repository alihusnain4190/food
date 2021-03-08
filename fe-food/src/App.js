import "./App.scss";
import Home from "./Pages/home";
import Discription from "./Pages/Discription";
// import Customsie from "./Pages/Customsie";
import { Router } from "@reach/router";
import LowerNavbar from "./Component/LowerNavbar";
import Navbar from "./Component/Navbar";
import Cart from "./Pages/Cart";
function App() {
  return (
    <div className="App">
      <Navbar />
      <LowerNavbar />
      <Router>
        <Home path="/" />
        <Discription path="/discription/:id" />
        {/* <Customsie path="/customise" /> */}
        <Cart path="/cart"/>
      </Router>
    </div>
  );
}

export default App;
