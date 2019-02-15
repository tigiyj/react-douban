import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
class TopMenu extends Component {
    render() {
        return (
            <div>
                <Navbar fixed="top" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Douban</Navbar.Brand>
                    <Nav defaultActiveKey="/">
                        <NavLink to="/">
                            <Nav.Item>
                                <Nav.Link as="span" eventKey="/">app</Nav.Link>
                            </Nav.Item>
                        </NavLink>
                        <NavLink to="/home">
                            <Nav.Item>
                                <Nav.Link as="span" eventKey="home">home</Nav.Link>
                            </Nav.Item>
                        </NavLink>
                        <NavLink to="/top250">
                            <Nav.Item>
                                <Nav.Link as="span" eventKey="top250">top250</Nav.Link>
                            </Nav.Item>
                        </NavLink>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
export default TopMenu;
