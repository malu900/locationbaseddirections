import React from 'react';
import './App.scss';
import NavigationBar from "./components/NavigationBar";
import {Col, Container, Row} from "react-bootstrap";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import User from "./components/User";
import UserList from "./components/UserList";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

    return (
        <Router>
            <div className="App">
                <NavigationBar/>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Switch>
                                <Route path={"/"} exact component={Welcome}/>
                                <Route path={"/add"} exact component={User}/>
                                <Route path={"/edit/:id"} exact component={User}/>
                                <Route path={"/list"} exact component={UserList}/>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        </Router>
);
}

export default App;