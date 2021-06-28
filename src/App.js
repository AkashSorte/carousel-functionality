import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Carousel from './carousel/Carousel';
import Camera from './camera/Camera';
import Home from './Home';
import Slider from './footer/slider';
import Dropdown from './dropdown/Dropdown';
import EditableField from './editableField/EditableField';
import ContentLoader from './contentLoader/ContentLoader';
import Breadcrumbs from "./BreadCrumbs";
import {Crumbs,Furniture, LivingRoom, sofaBed} from './demoBreadCrumb/Crumb'
import DemoEmailValidator from "./multiEmailInput/DemoEmailValidator";
import DemoContentWrapper from "./styleComponent/DemoContentWrapper";

function App() {
  const routes = [
    {
      path: "/carousel",
      name: "Carousel", 
      Component: Carousel
    }, {
      path: "/cameraAnimation",
      name: "Camera Animation", 
      Component: Camera
    }, {
      path: "/SlideFooter",
      name: "SlideFooter", 
      Component: Slider
    }, {
      path: "/Dropdown",
      name: "Dropdown", 
      Component: Dropdown
    }, {
      path: "/editable",
      name: "Editable Field", 
      Component: EditableField
    }, {
      path: "/contentLoader",
      name: "Content Loader", 
      Component: ContentLoader
    }, {
      path: "/",
      Component: Home
    }, {
      path: "/breadCrumbs",
      name: "Home", 
      Component: Crumbs
    }, {
      path: "/breadCrumbs/furniture",
      name: "Furniture",
      Component: Furniture
    }, {
      path: "/breadCrumbs/furniture/livingRoom",
      name: "Living Room",
      Component: LivingRoom
    }, {
      path: "/breadCrumbs/furniture/livingRoom/sofa",
      name: "Sofa Bed",
      Component: sofaBed
    }, {
      path: "/emailValidator",
      name: "Email Validator",
      Component: DemoEmailValidator
    }, {
      path: "/styleComponent",
      name: "Style Component",
      Component: DemoContentWrapper
    }
  ];
  return (
    <div>
    <Router>
    <div>
      <Switch>
        {routes.map(({ path, name, Component }, key) => (
          <Route
            exact
            path={path}
            key={key}
            render={props => {
              // const crumbs = routes
              //   .filter(({ path }) => props.match.path.includes(path))
              //   .map(({ path, ...rest }) => ({
              //     path: Object.keys(props.match.params).length
              //       ? Object.keys(props.match.params).reduce(
              //         (path, param) => path.replace(
              //           `:${param}`, props.match.params[param]
              //         ), path
              //         )
              //       : path,
              //     ...rest
              //   }));
              return (
                // <div>
                //   <Breadcrumbs crumbs={crumbs} />
                //   <Component {...props} />
                // </div>
                <Component {...props} />
              );
            }}
          />
        ))}
      </Switch>
    </div>
  </Router>
  </div>
  );
}

export default App;
