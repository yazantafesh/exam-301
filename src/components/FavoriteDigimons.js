import axios from 'axios';
import React, { Component } from 'react'
import OneFavDigimon from './OneFavDigimon';
import UpdateForm from './UpdateForm';
import CardColumns from 'react-bootstrap/CardColumns';

class FavoriteDigimons extends Component {

    constructor(props){
        super(props);
        this.state={
            serverLink:process.env.REACT_APP_SERVER,
            digimons:[],
            showDigimons:false,
            showForm:false,
            index:0,
            name:'',
            img:'',
            level:''
        }
    }

    componentDidMount = async () =>{
        const favDigimons = await axios.get(`${this.state.serverLink}/getFavDigimons`);
        this.setState({
            digimons:favDigimons.data,
            showDigimons:true
        })
    }

    deleteDigimon = async (idx) =>{
        const id = this.state.digimons[idx]._id;

        const digimonsAfterDelete = await axios.delete(`${this.state.serverLink}/deleteDigimon/${id}`);

        this.setState({
            digimons:digimonsAfterDelete.data
        })
    }

    showForm = (idx) =>{
        this.setState({
            showForm:true,
            index:idx,
            name:this.state.digimons[idx].name,
            img:this.state.digimons[idx].img,
            level:this.state.digimons[idx].level
        })
    }

    updateName = (e) =>{
        this.setState({
            name:e.target.value
        })
    }
    updateImg = (e) =>{
        this.setState({
            img:e.target.value
        })
    }
    updateLevel = (e) =>{
        this.setState({
            level:e.target.value
        })
    }

    updateDigimon = async(e)=>{
        e.preventDefault();

        const id = this.state.digimons[this.state.index]._id; 
        const digimonData = {
            name:this.state.name,
            img:this.state.img,
            level:this.state.level
        }

        const updatedDigimonData = await axios.put(`${this.state.serverLink}/updateDigimon/${id}`,digimonData);
        this.setState({
            digimons:updatedDigimonData.data
        })

    }



    render() {
        return (
            <div>
                {
                    this.state.showForm &&
                    <UpdateForm name={this.state.name} img={this.state.img} level={this.state.level} updateName={this.updateName} updateImg={this.updateImg} updateLevel={this.updateLevel} updateDigimon={this.updateDigimon}/>
                }
                <CardColumns>
                {
                    this.state.showDigimons &&
                    this.state.digimons.map((item,idx)=>{
                        return(
                            <OneFavDigimon digimon={item} index={idx} deleteDigimon={this.deleteDigimon} showForm={this.showForm}/>
                        )
                    })
                }
                </CardColumns>
                
            </div>
        )
    }
}

export default FavoriteDigimons
