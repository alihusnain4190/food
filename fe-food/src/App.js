import "./App.scss";
import Home from "./Pages/home";
import Discription from "./Pages/Discription";
// import Customsie from "./Pages/Customsie";
import { Router } from "@reach/router";
import LowerNavbar from "./Component/LowerNavbar";
import Navbar from "./Component/Navbar";
import Cart from "./Pages/Cart";
import SignUp from "./Pages/SignUp";
import Header from "./Component/Header";
import Login from "./Pages/Login";
import PrivateRoute from "./Component/PrivateRoute";
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar />
      <LowerNavbar />
      <PrivateRoute exect as={Header} />
      <Router>
        {/* <Home path="/" /> */}

        <SignUp path="/signup" />
        <Login path="login" />
        <PrivateRoute exect as={Home} path="/" />
        <Discription path="/discription/:id" />
        {/* <Customsie path="/customise" /> */}
        <Cart path="/cart" />
      </Router>
    </div>
  );
}

export default App;
