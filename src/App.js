import './App.css';
import Carousel from './carousel/Carousel';
// import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Camera from './camera/Camera';
import Home from './Home';
import Slider from './footer/slider';
import Dropdown from './dropdown/Dropdown';
import EditableField from './editableField/EditableField';

function App() {
  return (
    <Router>
    <div>
      {/* <nav>
        <ul>
        <li>
            <Link to="/cameraAnimation">cameraAnimation</Link>
          </li>
          <li>
            <Link to="/carousel">carousel</Link>
          </li>
        </ul>
      </nav> */}

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/carousel">
          <Carousel />
        </Route>
        <Route path="/cameraAnimation">
          <Camera />
        </Route>
        <Route path="/SlideFooter">
          <Slider />
        </Route>
        <Route path="/Dropdown">
          <Dropdown />
        </Route>
        <Route path="/editable">
          <EditableField />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
