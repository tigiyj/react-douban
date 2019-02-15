import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Link } from 'react-router-dom';
import App from './App';
import Home from './page/Home';
import Top250 from './page/Top250';
import TopMenu from './TopMenu.js';
class Routers extends Component {
    render() {
        return (
            <Router>
                <div>
                    <TopMenu />
                    <div id="index">
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/top250" component={Top250} />
                        {/* <Route path="/cast/:id" component={Top250} /> */}
                        {/* <Route path="/movieDetail/:id" component={MovieDetail} /> */}
                    </Switch>
                    </div>
                </div>
            </Router >
        )
    }
}
export default Routers;