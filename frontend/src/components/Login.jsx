import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Col, Row, Card } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

export const Login = () => {
	return (
		<React.Fragment>
			<div className="wrapper-page">
				<Card className="overflow-hidden account-card mx-3">
					<div className="bg-primary p-4 text-white text-center position-relative">
						<h4 className="font-20 m-b-5">Bienvenido a Tuten</h4>
						<Link to="/">{/* <img className="logo logo-admin" src={logosm} height="200" alt="logo" /> */}</Link>
					</div>
					<div className="account-card-content">
						{this.props.user && <Alert color="success">Your Login is successfull.</Alert>}
						{this.props.loginError && <Alert color="danger">{this.props.loginError}</Alert>}

						<AvForm className="form-horizontal m-t-30" onValidSubmit={this.handleSubmit}>
							<AvField name="username" label="Usuario" value={this.state.username} placeholder="@123456789" type="text" required />
							<AvField name="password" label="Contraseña" value={this.state.password} placeholder="**********" type="password" required />

							<Row className="form-group m-t-20">
								<Col sm="6"></Col>
								<Col sm="6" className="text-right">
									<Button color="primary" className="w-md waves-effect waves-light login-btn" type="submit">
										Iniciar
									</Button>
								</Col>
							</Row>

							<Row className="form-group m-t-10 mb-0">
								<Col md="12" className="m-t-20">
									<Link to="/forget-password">
										<i className="mdi mdi-lock"></i> Olvidaste la contraseña?
									</Link>
								</Col>
							</Row>
						</AvForm>
					</div>
				</Card>

				<div className="m-t-40 text-center">
					<p>
						No tienes activado tu cuenta?{' '}
						<Link to="/register" className="font-500 text-primary">
							Registrate ahora!
						</Link>
					</p>
					<p>© {new Date().getFullYear()} Andrés Benitez</p>
				</div>
			</div>
		</React.Fragment>
	);
};
