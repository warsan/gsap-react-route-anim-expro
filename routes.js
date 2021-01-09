import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// components
import { Home, Expro, Services, Contact } from "./components";

class Routes extends Component {

	render(){
		return <div className="container">
			<div className="row">
				<div className="col-12">
					<h3 className="text-center">Анимация маршрутов с помощью GSAP</h3>
					<p className="lead"></p>
				</div>
			</div>

			<BrowserRouter>
				<div className="row">

					{/* МЕНЮ */}
					<nav className="col-12">
						<Link className="btn gsap-btn mr-2" to="/">Дом</Link>
            <Link className="btn gsap-btn mr-2" to="/expro">Экспромт</Link>
						<Link className="btn gsap-btn mr-2" to="/services">Услуги</Link>
						<Link className="btn gsap-btn" to="/contact">Контакт</Link>
					</nav>

					{/* КОНТЕНТ */}
					<div className="col-12">
						<Route path="/" exact>
							{ ({ match }) => <Home show={match !== null} /> }
						</Route>
            <Route path="/expro">
							{ ({ match }) => <Expro show={match !== null} /> }
						</Route> {/**/}
						
						<Route path="/services">
							{ ({ match }) => <Services show={match !== null} /> }
						</Route>
						<Route path="/contact">
							{ ({ match }) => <Contact show={match !== null} /> }
						</Route>
					</div>

				</div>
			</BrowserRouter>

		</div>;
	}

}

export default Routes;
