import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Layout/Header";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";
import { Provider } from "./Context";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./components/Contacts/AddContact";
import EditContact from "./components/Contacts/EditContact";
import ByRefs from "./components/Contacts/ByRefs";

class App extends Component {
	render() {
		return (
			<Provider>
				<Router>
					<div className="App">
						<Header branding="Contact Manager" />
						<div className="container">
							{/* <ByRefs/> */}
							<Switch>
								<Route exact path="/" component={Contacts} />
								<Route exact path="/about" component={About} />
								<Route exact path="/contact/add" component={AddContact} />
								<Route exact path="/contact/edit/:id" component={EditContact} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
