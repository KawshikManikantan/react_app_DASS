import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
      <Route exact path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
