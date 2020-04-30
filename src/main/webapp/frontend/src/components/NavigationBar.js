import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand"> Home </Link>
                <Nav className="mr-auto">
                    <Link to={"add"} className="nav-link"> Add User </Link>
                    <Link to={"list"} className="nav-link"> User List </Link>
                </Nav>
            </Navbar>
        )
    }
}