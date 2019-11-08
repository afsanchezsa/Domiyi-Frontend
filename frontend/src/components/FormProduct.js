import React, {Component} from 'react';
import axios from 'axios'
import ls from 'local-storage'

class FormProduct extends Component {
    state = {
        states:[],
        categories:[],
        id: "",
        idCompany: "",
        idStatus:"",
        name: "",//the json object 
        description: "",
        price: "",
        image: "",
        category:""

    }

    async componentDidMount(){
        const st = await axios.get(`http://localhost:3000/productsStatus`);
        //console.log(url);
        this.setState({
            states: st.data
        });
        const categories=await axios.get(`http://localhost:3000/categories`);
        
        this.setState({
            categories:categories.data
        });
    }
   /* async componentDidMount() {
        const res = await axios.get('http://localhost:3000/users');
        this.setState({
            users: res.data
        })
    }*/


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
        var i;
        var selected=e.target.value;
        for(i=0;i<this.state.categories;i++){
            if(this.state.categories[i].category==selected){
                this.setState({
                    category:this.state.categories[i].id
                    
                });
                break;
            }
        }
        
        
    }
    Register = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/product/register', {
            id: this.state.id,
            idCompany: this.state.idCompany,
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            image: "No disponible",//no available until this functionality be implemented
            idStatus:this.state.idStatus,
            idCategory: this.state.category
        });
        
        alert("registro exitoso");
//evita que al presionar el boton el formulario se limpie
    }

    render() {
        return (
            <div className="container p-4">
                <form onSubmit={this.Register}>
                    
                    <div className="form-group ">
                        <label for="IdCompany"> Company</label>
                        <input type="text" className="form-control" id="IdCompany" placeholder="Enter Id Company"
                               onChange={this.onChangeIdCompany}></input>
                    </div>
                    <div className="form-group ">
                        <label for="IdStatus">Status</label>
                        <select className="form-control">
                        <option value="" disabled selected>-- Seleccione un estado --</option>
                            {this.state.states.map(st=>
                                <option key={st.id} value={st.status}>{st.status}</option>
                            )}
                        </select>
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
                        <select className="form-control"  onChange={this.onChangeCategory} >
                        <option value="" disabled selected >-- Seleccione una categoria --</option>
                            {this.state.categories.map(ct=>
                                <option key={ct.id} value={ct.category}>{ct.category}</option>
                            )}
                        </select>
                    </div>
                    

                    <button type="submit" className="btn btn-primary" onSubmit={this.Register}>Registrar</button>
                </form>

            </div>

        );
    }
}

export default FormProduct;