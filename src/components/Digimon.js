import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

class Digimon extends Component {
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
                        <Button variant="warning" onClick={()=>this.props.addToFav(this.props.digimon)}>Add to Favourites</Button>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}

export default Digimon
