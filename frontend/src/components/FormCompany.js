import React, {Component} from 'react';
import axios from 'axios'


class FormCompany extends Component {
    state = {
        id: "",
        idStatus: "",
        name: "",
        image: "",
        idAdmin: "",
        category: "",//this state define the json object wich will be send to the backend
        deliveryCost: "",
        officceHours: "",
    }
//on change events is for track the values on the inputs fields
    onChangeId = (e) => {//las funciones  onchange obligatoriamente tienen que ser flecha pues no vincula el this a si misma
        this.setState({
            id: e.target.value
        });
//console.log(this.state.id);
    }
    onChangeIdStatus = (e) => {
        this.setState({
            idStatus: e.target.value
        });
//console.log(this.state.idCompany+' '+this.state.id);
    }
    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    onChangeImage = (e) => {
        this.setState({
            image: e.target.value
        });
//console.log(this.state.idCompany+' '+this.state.id);
    }
    onChangeIdAdmin = (e) => {
        this.setState({
            idAdmin: e.target.value
        });
    }
    onChangeCategory = (e) => {
        this.setState({
            category: e.target.value
        });
    }
    onChangeDeliveryCost = (e) => {
        this.setState({
            deliveryCost: e.target.value
        });
    }
    onChangeOfficceHours = (e) => {
        this.setState({
            officceHours: e.target.value
        });
    }
    Register = async (e) => {//with axios send the request to the route with the body 
        const res = await axios.post('http://localhost:3000/company/register', {
            id: this.state.id,
            idStatus: this.state.idStatus,
            name: this.state.name,
            image: this.state.image,
            idAdmin: this.state.idAdmin,
            category: this.state.category,
            deliveryCost: this.state.deliveryCost,
            officceHours: this.state.officceHours
        });
        e.preventDefault();
        alert("registro exitoso");
//evita que al presionar el boton el formulario se limpie
    }

    render() {
        return (
            <div className="container p-4">
                <form onSubmit={this.Register}>
                    <div className="form-group ">
                        <label for="Id">Id</label>
                        <input type="number" className="form-control" id="Id" placeholder="Enter Id "
                               onChange={this.onChangeId}></input>
                    </div>
                    <div className="form-group ">
                        <label for="IdStatus">IdStatus</label>
                        <input type="number" className="form-control" id="idStatus" placeholder="Enter id status"
                               onChange={this.onChangeIdStatus}></input>
                    </div>
                    <div className="form-group">
                        <label for="Name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Type the company's name"
                               onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label for="Image">Image</label>
                        <input type="text" className="form-control" id="image" placeholder="Type image's link"
                               onChange={this.onChangeImage}></input>
                    </div>
                    <div className="form-group">
                        <label for="IdAdmin">IdAdmin</label>
                        <input type="number" className="form-control" id="idAdmin" placeholder="Type id's admin"
                               onChange={this.onChangeIdAdmin}></input>
                    </div>
                    <div className="form-group">
                        <label for="Category">Category</label>
                        <input type="number" className="form-control" id="category" placeholder="Type the category"
                               onChange={this.onChangeCategory}></input>
                    </div>
                    <div className="form-group">
                        <label for="DeliveryCost">DeliveryCost</label>
                        <input type="number" className="form-control" id="deliveryCost" placeholder="Type the delivery cost"
                               onChange={this.onChangeDeliveryCost}></input>
                    </div>
                    <div className="form-group">
                        <label for="OfficceHours">OfficceHours</label>
                        <input type="text" className="form-control" id="officceHours" placeholder="Type the officce hours"
                               onChange={this.onChangeOfficceHours}></input>
                    </div>
                    <button type="submit" className="btn btn-primary" onSubmit={this.Register}>Registrar</button>
                </form>

            </div>

        );
    }
}

export default FormCompany;