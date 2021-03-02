import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyRoom from "./pages/MyRoom";
import Header from "./component/Header";
import RecRoom from "./pages/RecRoom";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <div>
          <Router>
            <Route exact path="/" component={MyRoom} />
            <Route exact path="/RecRoom" component={RecRoom} />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
