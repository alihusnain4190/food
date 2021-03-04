import "./App.scss";
import Home from "./Pages/home";
import { Router } from "@reach/router";
function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
}

export default App;
