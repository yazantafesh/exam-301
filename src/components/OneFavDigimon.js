import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

class OneFavDigimon extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }} key={this.props.index}>
                    <Card.Img variant="top" src={this.props.digimon.img} />
                    <Card.Body>
                        <Card.Title>{this.props.digimon.name}</Card.Title>
                        <Card.Text>
                        {this.props.digimon.level}
                        </Card.Text>
                        <Button variant="info" onClick={()=>this.props.showForm(this.props.index)}>Update</Button>
                        <Button variant="danger" onClick={()=>this.props.deleteDigimon(this.props.index)}>Delete</Button>
                    </Card.Body>
                </Card>
                
            </div>
        )
    }
}

export default OneFavDigimon
