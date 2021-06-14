import axios from 'axios';
import React, { Component } from 'react'
import Digimon from './Digimon';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends Component {

    constructor(props){
        super(props);
        this.state={
            serverLink:process.env.REACT_APP_SERVER,
            digimons:[],
            showDigimons:false
        }
    }

    componentDidMount = async () =>{
        const digimons = await axios.get(`${this.state.serverLink}/digimons`);
        this.setState({
            digimons:digimons.data,
            showDigimons:true
        })

    }

    addToFav = async (data) =>{
        await axios.post(`${this.state.serverLink}/addToFav`,data)

    }

    render() {
        return (
                <CardColumns>
                {
                    this.state.showDigimons &&
                    this.state.digimons.map((item,idx)=>{
                        return(
                            <Digimon digimon={item} index={idx} addToFav={this.addToFav}/>
                        )
                    })
                }
                </CardColumns>
        )
    }
}

export default Main
