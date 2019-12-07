// eslint-disable-next-line
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import ls from 'local-storage'
import Host from '../Utilities/ServerUtilities'

//this shows a card with every product


class EditProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        states: [],
        categories: [],
        product:this.props.location.state.product,
        state:''

    }

    async componentDidMount() {
        const st = await axios.get(Host + '/productsStatus');
        //console.log(url);
        this.setState({
            states: st.data
        });
        const categories = await axios.get(Host + '/categories');

        this.setState({
            categories: categories.data
        });
        var i;
        for(i =0;i<this.state.states.length;i++){
            if(this.state.states[i].id==this.state.product.idStatus){
                this.setState({
                    state:this.state.states[i]
                })
            }
        }
    }
    onChangeName=(e)=>{
        var p=this.state.product;
        p.name=e.target.value;
        this.setState({
            product:p
        });
    }
    onChangeDescription=(e)=>{
        var p=this.state.product;
        p.description=e.target.value;
        this.setState({
            product:p
        });
        
    }
    onChangeTextImage=(e)=>{
        var p=this.state.product;
        p.image=e.target.value;
        this.setState({
            product:p
        });
        
    }
    onChangePrice=(e)=>{
        var p=this.state.product;
        p.price=e.target.value;
        this.setState({
            product:p
        });
        
    }
    onChangeIdStatus=(e)=>{
        var p=this.state.product;
        var i=0;
        var newStatus=this.state.state;
        for (i=0;i<this.state.states.length;i++){
            if(this.state.states[i].status==e.target.value){
                newStatus=this.state.states[i];
                break;
            }
        }
        p.idStatus=newStatus.id;
        this.setState({
            product:p,
            state:newStatus.status
        });
    
    }

    render() {
        return (
            <div className="container p-4 col-md-7 col-sm-10">
                <form onSubmit={this.Register} className="text-center border border-light ">
                    <p class="h4 mb-4">Edita el Producto</p>
                    <img src={this.state.product.image} alt="sin Imagen" className="col-sm-10 col-md-6"/>
                    <div className="form-group ">
                        <label for="IdStatus">Status</label>
                        <select className="form-control mb-4" onChange={this.onChangeIdStatus} value={this.state.state.status}>
                            <option value="" disabled selected>--seleccione un estado--</option>
                            {this.state.states.map(st =>
                                <option key={st.id} value={st.status}>{st.status}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control mb-4" id="name" placeholder="Name of Product"
                               onChange={this.onChangeName} value={this.state.product.name}></input>
                    </div>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <input type="text" className="form-control mb-4" id="description" placeholder="Description"
                               onChange={this.onChangeDescription}
                               value={this.state.product.description}></input>
                    </div>
                    <div className="form-group">
                        <label for="url">URL Image</label>
                        <input type="text" className="form-control mb-4" id="url" placeholder="Url Image"
                               onChange={this.onChangeTextImage}
                               value={this.state.product.image}></input>
                    </div>
                    <div className="form-group">
                        <label for="price">Price</label>
                        <input type="number" className="form-control mb-4" id="price" placeholder="Price"
                               onChange={this.onChangePrice} value={this.state.product.price}></input>
                    </div>
                    <div className="form-group">
                        <label for="Image">Image</label>
                        <input type="file" className="form-control-file" id="Image"></input>
                    </div>
                    <div className="form-group">
                        <label for="Category">Category</label>
                        <select className="form-control mb-4" onChange={this.onChangeCategory}>
                            <option value="" disabled selected>-- Seleccione una categoria --</option>
                            {this.state.categories.map(ct =>
                                <option key={ct.id} value={ct.category}>{ct.category}</option>
                            )}
                        </select>
                    </div>


                    <button type="submit" className="btn btn-info btn-block my-4" onSubmit={this.Register}>Editar
                    </button>
                </form>

            </div>
        );
    }
}

export default EditProduct;

//<a targer="_blank" className="btn btn-primary btn-block" onClick={this.onclick}>Comprar</a>