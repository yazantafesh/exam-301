import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';

class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={(e)=>this.props.updateDigimon(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" value={this.props.name} onChange={this.props.updateName}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type="text" placeholder="Image URL" value={this.props.img} onChange={this.props.updateImg} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Level</Form.Label>
                        <Form.Control type="text" placeholder="Level" value={this.props.level} onChange={this.props.updateLevel}/>
                    </Form.Group>
                   
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </div>
        )
    }
}

export default UpdateForm
