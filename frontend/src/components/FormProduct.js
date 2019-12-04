import React, {Component} from 'react';
import axios from 'axios'
import ls from 'local-storage'
import Host from '../Utilities/ServerUtilities'
class FormProduct extends Component {
    constructor(props){
        super(props);
    }
    
    state = {
        states:[],
        categories:[],
        id: "",
        idCompany: 1,
        idStatus:"",
        name: "",//the json object 
        description: "",
        price: "",
        image: "",
        category:""

    }

    async componentDidMount(){
        const st = await axios.get(Host+'/productsStatus');
        //console.log(url);
        this.setState({
            states: st.data
        });
        const categories=await axios.get(Host+'/categories');
        
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
        var i;
        var selected=e.target.value;
        for(i=0;i<this.state.states.length;i++){
            if(this.state.states[i].status===selected){
                this.setState({
                    idStatus:this.state.states[i].id
                    
                });
                break;
            }
        }
        
        
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
        for(i=0;i<this.state.categories.length;i++){
            if(this.state.categories[i].category===selected){
                this.setState({
                    category:this.state.categories[i].id
                    
                });
                break;
            }
        }
        
        
    }
    onChangeTextImage = (e) => {
        this.setState({
            image: e.target.value
        });
    }
    Register = async (e) => {
        e.preventDefault();
        const res = await axios.post(Host+'/product/register', {
            id: this.state.id,
            idCompany: this.state.idCompany,
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            image: this.state.image,//no available until this functionality be implemented
            idStatus:this.state.idStatus,
            idCategory: this.state.category
        },{
            headers: {
                authorization: ls.get('token')

            }
        });
        
        alert("registro exitoso");
//evita que al presionar el boton el formulario se limpie
    }

    render() {
        return (
            <div className="container p-4 col-md-7 col-sm-10">
                <form onSubmit={this.Register} className="text-center border border-light p-5">
                <p class="h4 mb-4">Registra un Producto</p>
                    
                    <div className="form-group ">
                        <label for="IdStatus">Status</label>
                        <select className="form-control mb-4" onChange={this.onChangeIdStatus}>
                        <option value="" disabled selected>-- Seleccione un estado --</option>
                            {this.state.states.map(st=>
                                <option key={st.id} value={st.status}>{st.status}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control mb-4" id="name" placeholder="Name of Product"
                               onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <input type="text" className="form-control mb-4" id="description" placeholder="Description"
                               onChange={this.onChangeDescription}></input>
                    </div>
                    <div className="form-group">
                        <label for="url">URL Image</label>
                        <input type="text" className="form-control mb-4" id="url" placeholder="Url Image"
                               onChange={this.onChangeTextImage}></input>
                    </div>
                    <div className="form-group">
                        <label for="price">Price</label>
                        <input type="number" className="form-control mb-4" id="price" placeholder="Price"
                               onChange={this.onChangePrice}></input>
                    </div>
                    <div className="form-group">
                        <label for="Image">Image</label>
                        <input type="file" className="form-control-file" id="Image"></input>
                    </div>
                    <div className="form-group">
                        <label for="Category">Category</label>
                        <select className="form-control mb-4"  onChange={this.onChangeCategory} >
                        <option value="" disabled selected >-- Seleccione una categoria --</option>
                            {this.state.categories.map(ct=>
                                <option key={ct.id} value={ct.category}>{ct.category}</option>
                            )}
                        </select>
                    </div>
                    

                    <button type="submit" className="btn btn-info btn-block my-4" onSubmit={this.Register}>Registrar</button>
                </form>

            </div>

        );
    }
}

export default FormProduct;