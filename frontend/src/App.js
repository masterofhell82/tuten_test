import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Bookings } from './components/Bookings';
import { Login } from './components/Login';
import { Nabvar } from './components/Nabvar';

function App() {
	return (
		<Router>
			<Nabvar />
			<div className="container p-4">
				<Switch>
					<Route path="/bookings" component={Bookings} />

					<Route path="/" component={Login} />
				</Switch>
			</div>
			<div className="m-t-40 text-center">
				<p>© {new Date().getFullYear()} Andrés Benitez</p>
			</div>
		</Router>
	);
}

export default App;
