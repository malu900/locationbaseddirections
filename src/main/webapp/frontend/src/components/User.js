import React from "react";
import {Button, Card, Col, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faList, faPlusSquare, faSave, faUndo} from "@fortawesome/free-solid-svg-icons";
import MyToast from "./MyToast";

export default class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.userChange = this.userChange.bind(this);
        this.submitUser = this.submitUser.bind(this);
    }

    initialState = {
        id: '', firstName: '', lastName: '', email: '', password: ''
    };

    componentDidMount() {
        const userId = this.props.match.params.id;
        if (userId) {
            this.findUserById(userId);
        }
    }


    submitUser = event => {
        event.preventDefault();
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        };

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        fetch("api/v1/users/adduser", {
            method: 'POST',
            body: JSON.stringify(user),
            headers
        }).then(response => response.text())
            .then((user) => {
                if (user) {
                    this.setState({"show": true, "method": "post"});
                    setTimeout(() => this.setState({"show": false}), 3000)
                } else {
                    this.setState({"show": false})
                }
            });

        this.setState(this.initialState);
    };


    findUserById = (userId) => {
        fetch("../api/v1/users/id=" + userId)
            .then(response => response.json())
            .then((user) => {
                if (user) {
                    this.setState({
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        password: user.password
                    })
                }
            }).catch((error) => {
            console.log(error);
        })
    };

    userChange = event => {
        this.setState({
                [event.target.name]: event.target.value
            }
        );
    };

    resetUser = () => {
        this.setState(() => this.initialState);
    };

    // keeping track of session history. otherwise will not redirect to list page and stays on add user
    userList = () => {
        // console.log(this.props.history);
        return this.props.history.push("/list");
    };

    // updateUser = event => {
    //     event.preventDefault();
    //     const user = {
    //         id: this.state.id,
    //         firstName: this.state.firstName,
    //         lastName: this.state.lastName,
    //         email: this.state.email,
    //         password: this.state.password
    //     };
    //     axios.put("http://localhost:8080/api/v1/users", user)
    //         .then(response => {
    //             if (response.data != null) {
    //                 this.setState({"show": true, "method": "put"});
    //                 setTimeout(() => this.setState({"show": true}), 3000);
    //                 setTimeout(() => this.userList(), 3000);
    //             } else {
    //                 this.setState({"show": false})
    //             }
    //         });
    //
    //     this.setState(this.initialState);
    // };

    updateUser = event => {
        event.preventDefault();
        const user = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        };

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        fetch("http://localhost:9080/api/v1/users", {
            method: 'PUT',
            body: JSON.stringify(user),
            headers
        }).then(response => response.json())
            .then((user) => {
            if (user) {
                this.setState({"show": true, "method": "put"});
                setTimeout(() => this.setState({"show": true}), 3000);
                setTimeout(() => this.userList(), 3000);
            } else {
                this.setState({"show": false})
            }
        });

        this.setState(this.initialState);
    };

    render() {

        const {firstName, lastName, email, password} = this.state;
        return (
            <div>
                <div style={{"display": this.state.show ? "block" : "none"}}>
                    <MyToast show={this.state.show}
                             message={this.state.method === "put" ? "updated user" : "saved user"}/>
                </div>

                <Card className="border border-dark bg-dark text-white">
                    <Card.Header> <FontAwesomeIcon
                        icon={this.state.id ? faEdit : faPlusSquare}/> {this.state.id ? "update" : "Save"}
                    </Card.Header>
                    <Form onReset={this.resetUser} onSubmit={this.state.id ? this.updateUser : this.submitUser}
                          id="userFormId">
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirstname">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="firstName"
                                                  placeholder="Enter firstname"
                                                  className="bg-dark text-white"
                                                  value={firstName}
                                                  onChange={this.userChange}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridLastname">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text"
                                                  name="lastName"
                                                  placeholder="Enter Lastname"
                                                  className="bg-dark text-white"
                                                  value={lastName}
                                                  onChange={this.userChange}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="email"
                                                  name="email"
                                                  placeholder="Enter email"
                                                  className="bg-dark text-white"
                                                  value={email}
                                                  onChange={this.userChange}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="password"
                                                  name="password"
                                                  placeholder="Password"
                                                  value={password}
                                                  className="bg-dark text-white"
                                                  onChange={this.userChange}
                                    />
                                </Form.Group>

                            </Form.Row>

                        </Card.Body>
                        <Card.Footer>
                            <Button variant="success" type="submit">
                                <FontAwesomeIcon icon={faSave}/>
                                {this.state.id ? "update" : "Save"}
                            </Button>
                            <Button variant="info" type="reset">
                                <FontAwesomeIcon icon={faUndo}/>
                            </Button>
                            <Button variant="info" type="button" onClick={this.userList.bind()}>
                                <FontAwesomeIcon icon={faList}/> User list
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>
        )
    }
}