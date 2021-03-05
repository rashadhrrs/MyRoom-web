import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyRoom from "./pages/MyRoom";
import RecRoom from "./pages/RecRoom";
import Room1 from './pages/Room1'

function App() {
  return (
    <div className="App">
      <div className="content">
        <div>
          <Router>
            <Route exact path="/" render={(props) => <MyRoom {...props} />} />
            <Route exact path="/RecRoom"  render={(props) => <RecRoom {...props} />} />
            <Route exact path= "/Room1" render={(props) => <Room1 {...props}/>} />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
