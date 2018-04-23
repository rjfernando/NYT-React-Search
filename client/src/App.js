import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/NavBar";
import Home from "./components/pages/Home";

const App = () =>
  <Router>
  	<div>
  		<Nav/>
			<Route exact path="/" component={Home}/>
			<Route exact path="/search" component={Home}/>
  	</div>
  </Router>;

export default App;
