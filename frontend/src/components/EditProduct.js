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
            product:{},
            state:'',
            id: '',
            idCompany: '',
            name: '',
            description:'',
            price: '',
            image: '',//no available until this functionality be implemented
            idStatus:'',
            idCategory: ''
            
        }
    
    
    async componentDidMount() {
        var res;

    
             res = await axios.post(Host+'/productOffer/ByIdProduct',{
            idProduct:this.props.location.state.product.id
                
             },{
              
            headers: {
                authorization: ls.get('token')

            }
        });
        
        this.setState({
            
           id: res.data[0].id,
           idCompany: res.data[0].idCompany,
           name: res.data[0].name,
           description: res.data[0].description,
           price: res.data[0].price,
           image: res.data[0].image,//no available until this functionality be implemented
           idStatus:res.data[0].idStatus

        });
    
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
            if(this.state.states[i].id==this.state.idStatus){
                this.setState({
                    state:this.state.states[i]
                })
            }
        }
    }
    onChangeName=(e)=>{
        this.setState({

            name:e.target.value
        });
    }
    onChangeDescription=(e)=>{
       
        this.setState({
       
            description:e.target.value
        });
        
    }
    onChangeTextImage=(e)=>{
        this.setState({

            image:e.target.value
        });
        
    }
    onChangePrice=(e)=>{
        this.setState({

            price:e.target.value
        });
        
    }
    onChangeIdStatus=(e)=>{
        var i=0;
        var newStatus=this.state.state;
        for (i=0;i<this.state.states.length;i++){
            if(this.state.states[i].status==e.target.value){
                newStatus=this.state.states[i];
                break;
            }
        }
        this.setState({
            state:newStatus.status,
            idStatus:newStatus.id
        });
    
    }
     Edit=async(e)=>{
        e.preventDefault();
      try{
        const res = await axios.post(Host+'/product/update', 
        {   
           id: this.state.id,
            idCompany: this.state.idCompany,
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            image: this.state.image,//no available until this functionality be implemented
            idStatus:this.state.idStatus
                    }
        
        ,{
            headers: {
                authorization: ls.get('token')

            }
        });
        
        alert("registro exitoso");

      }catch(e){
          console.log(e);
        alert("Hubo un problema intentalo de nuevo");
    
    }

    }

    render() {
        return (
            <div className="container p-4 col-md-7 col-sm-10">
                <form onSubmit={this.Register} className="text-center border border-light ">
                    <p class="h4 mb-4">Edita el Producto</p>
                    <img src={this.state.image} alt="sin Imagen" className="col-sm-10 col-md-6"/>
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
                               onChange={this.onChangeName} value={this.state.name}></input>
                    </div>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <input type="text" className="form-control mb-4" id="description" placeholder="Description"
                               onChange={this.onChangeDescription}
                               value={this.state.description}></input>
                    </div>
                    <div className="form-group">
                        <label for="url">URL Image</label>
                        <input type="text" className="form-control mb-4" id="url" placeholder="Url Image"
                               onChange={this.onChangeTextImage}
                               value={this.state.image}></input>
                    </div>
                    <div className="form-group">
                        <label for="price">Price</label>
                        <input type="number" className="form-control mb-4" id="price" placeholder="Price"
                               onChange={this.onChangePrice} value={this.state.price}></input>
                    </div>
                   
                    

                    <button type="submit" className="btn btn-info btn-block my-4" onClick={this.Edit}>Editar
                    </button>
                </form>

            </div>
        );
    }
}

export default EditProduct;

//<a targer="_blank" className="btn btn-primary btn-block" onClick={this.onclick}>Comprar</a>