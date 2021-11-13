import "./components/style/Style.css";
import { Switch , Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Contact from "./components/pages/Contact";
import Errors from "./components/pages/Errors";


function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/service" component={Service}/>
        <Route path="/contact" component={Contact}/>
        <Route  component={Errors}/>
      </Switch>
    </>
  );
}

export default App;
