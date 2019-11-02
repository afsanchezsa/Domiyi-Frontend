import React, {Component} from 'react';
import axios from 'axios'
import ls from 'local-storage'

class FormProduct extends Component {
    state = {
        
        id: "",
        idCompany: "",
        idStatus:"",
        name: "",//the json object 
        description: "",
        price: "",
        image: "",
        category:""

    }

   async componentDidMount() {
    var res;
    try{
         res = await axios.get(`http://localhost:3000/products`,{
             headers:{
                 authorization:ls.get('token')
             }
         });
         this.setState({
            products: res.data
        });
        } catch(e){
        if(e.response.status==401){
            
        this.props.Login();
        }
        }
    }

    onChangeId = (e) => {//las funciones  onchange obligatoriamente tienen que ser flecha pues no vincula el this a si misma
        this.setState({
            id: e.target.value
        });
//console.log(this.state.id);
    }
    onChangeIdCompany = (e) => {
        this.setState({
            idCompany: e.target.value
        });
//console.log(this.state.idCompany+' '+this.state.id);
    }
    onChangeIdStatus=(e)=>{
        this.setState({
            idStatus:e.target.value
        });
    }
    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        });
    }
    onChangePrice = (e) => {
        this.setState({
            price: e.target.value
        });
    }
    onChangeCategory = (e) => {
        this.setState({
            category:e.target.value
        });
        //console.log(this.state.status);
    }
    Register = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/product/register', {
            id: this.state.id,
            idCompany: this.state.idCompany,
            idStatus:this.state.idStatus,
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            image: "No disponible",//no available until this functionality be implemented
            category: this.state.category
        });
        
        alert("registro exitoso");
//evita que al presionar el boton el formulario se limpie
    }

    render() {
        return (
            <div className="container p-4">
                <form onSubmit={this.Register}>
                    
                    <div className="form-group ">
                        <label for="IdCompany">Id Company</label>
                        <input type="number" className="form-control" id="IdCompany" placeholder="Enter Id Company"
                               onChange={this.onChangeIdCompany}></input>
                    </div>
                    <div className="form-group ">
                        <label for="IdStatus">Id Status</label>
                        <input type="number" className="form-control" id="IdStatus" placeholder="Enter Id Status"
                               onChange={this.onChangeIdStatus}></input>
                    </div>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name of Product"
                               onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <input type="text" className="form-control" id="description" placeholder="Description"
                               onChange={this.onChangeDescription}></input>
                    </div>
                    <div className="form-group">
                        <label for="price">Price</label>
                        <input type="number" className="form-control" id="price" placeholder="Price"
                               onChange={this.onChangePrice}></input>
                    </div>
                    <div className="form-group">
                        <label for="Image">Image</label>
                        <input type="file" className="form-control-file" id="Image"></input>
                    </div>
                    <div className="form-group">
                        <label for="Category">Category</label>
                        <input type="number" className="form-control" id="category" placeholder="Category"
                               onChange={this.onChangeCategory}></input>
                    </div>
                    

                    <button type="submit" className="btn btn-primary" onSubmit={this.Register}>Registrar</button>
                </form>

            </div>

        );
    }
}

export default FormProduct;