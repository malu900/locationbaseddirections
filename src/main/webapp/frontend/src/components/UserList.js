import React from "react";
import {Button, ButtonGroup, Card, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faList, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default class UserList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        fetch("api/v1/users")
            .then(response => response.json())
            .then((data) => {
                this.setState({users: data})
                console.log(data)
            });
    }

    deleteUser = (id) => {
        fetch("api/v1/users/"+id, {
            method: 'DELETE',
        }).then(response => response.text())
            .then( (user) => {
                if (user) {
                    //refresh list after delete user
                    this.setState({
                        users: this.state.users.filter(user => user.id !== id)
                    });
                }
            })
    };

    render() {
        return (
            <Card className="border border-dark bg-dark text-white">
                <Card.Header><FontAwesomeIcon icon={faList}/> User list</Card.Header>
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First name</th>
                            <th>Last Name</th>
                            <th>email</th>
                            <th>password</th>
                            <th>Adjust</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.users.length === 0 ?
                            <tr align="center">
                                <td colSpan="6"> No users</td>
                            </tr> :
                            this.state.users.map((user) => (
                                <tr key={user.id}>
                                    <td> {user.id} </td>
                                    <td> {user.firstName} </td>
                                    <td> {user.lastName} </td>
                                    <td> {user.email} </td>
                                    <td> {user.password} </td>
                                    <td>
                                        <ButtonGroup>
                                            <Link to={"edit/"+ user.id } className="btn btn-sm btn-outline-primary">
                                                <FontAwesomeIcon icon={faEdit}/>
                                                Edit
                                            </Link>
                                            <Button variant="outline-danger"
                                                    onClick={this.deleteUser.bind(this, user.id)}> <FontAwesomeIcon
                                                icon={faTrash}/>
                                            </Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

        )
    }
}