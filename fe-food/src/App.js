import "./App.scss";
import Home from "./Pages/home";
import Customise from "./Pages/Customise";
import { Router } from "@reach/router";
function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Customise path="/customise/:id" />
      </Router>
    </div>
  );
}

export default App;
