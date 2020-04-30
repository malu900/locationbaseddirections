import React from "react";
import {Toast} from "react-bootstrap";

export default class MyToast extends React.Component {

    render() {

        return (
            <div>
                <Toast className={"border border-success bg-success text-white"} show={this.props.message}>
                    <Toast.Header className={"bg-success text-white"} closeButton={false}>
                        <strong className="mr-auto"> Success </strong>
                    </Toast.Header>
                    <Toast.Body>
                        {this.props.message}
                    </Toast.Body>
                </Toast>
            </div>
        )
    }
}