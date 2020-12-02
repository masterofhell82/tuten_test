import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row, Card } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import HttpRequest from '../services/HttpRequest';

export const Login = () => {
	const API = 'https://dev.tuten.cl/TutenREST/rest/';

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			password: password,
			app: 'APP_BCK',
		};

		HttpRequest.endpoint = `${API}user/${userName}`;
		const res = await HttpRequest.post(data);

		console.log(HttpRequest.endpoint, res);
	};

	return (
		<React.Fragment>
			<div className="wrapper-page">
				<Card className="overflow-hidden account-card">
					<div className="p-4 text-center position-relative band">
						<h4 className="">Bienvenido a Tuten</h4>
						<Link to="/">{/* <img className="logo logo-admin" src={logosm} height="200" alt="logo" /> */}</Link>
					</div>
					<div className="account-card-content p-4">
						<AvForm className="form-horizontal m-t-30" onValidSubmit={handleSubmit}>
							<AvField name="username" label="Usuario" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="user@tuten.cl" type="text" required />
							<AvField name="password" label="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="**********" type="password" required />

							<Row className="form-group m-t-20">
								<Col sm="6"></Col>
								<Col sm="6" className="text-right">
									<Button color="primary" className="w-md waves-effect waves-light login-btn" type="submit">
										Iniciar
									</Button>
								</Col>
							</Row>
						</AvForm>
					</div>
				</Card>
			</div>
		</React.Fragment>
	);
};
