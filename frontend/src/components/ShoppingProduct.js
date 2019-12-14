// eslint-disable-next-line
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import Host from '../Utilities/ServerUtilities'
import ls from 'local-storage'
//this shows a card with every product

class ShoppingProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        states: [],
        idOrder: 1,//this.props.idOrder
        idProductOffer: '',//no es necesario el back lo encuentra
        quantity: "",
        observation: "",
        unitPrice: this.props.product.price,
        idsDetailscreated: [],
        idProduct:this.props.product.id,
        productOffer:{}
    }
    async componentDidMount(){
       var res;
        try{
        res = await axios.post(Host+'/productOffer/ByIdProduct',{
            idProduct:this.state.idProduct
                
             },{
              
            headers: {
                authorization: ls.get('token')

            }
        });
        this.setState({
         productOffer: res.data[0]
        });
       }catch(e){

       }
        
    }
    onChangeQuantity = (e) => {
               this.state.productOffer.quantity= e.target.value
    
    }
    onChangeObservation = (e) => {
        
            this.state.productOffer.observation= e.target.value
        
    }

    Register = async (e) => {
        e.preventDefault();
      /*  try {
            const res = await axios.post(Host+'/detail/register', {
                idOrder: this.state.idOrder,
                idProductOffer: this.state.idProductOffer,
                quantity: this.state.quantity,
                observation: this.state.observation,
                unitPrice: this.state.unitPrice,
                idProduct:this.props.product.id
            },{
                headers: {
                    authorization: ls.get('token')
    
                }
            });
            //var ids;
            //ids=this.state.idsDetailscreated;
            //ids.push(res.data.id);
            this.props.addDetail(res.data.id);
            //console.log(this.state.idsDetailscreated);

            alert("registro exitoso");

        } catch (e) {
            console.log(e);
    }*/
    /*var newDetail={
        
        quantity: this.state.quantity,
        observation: this.state.observation,
        unitPrice: this.state.unitPrice,
        idProduct:this.props.product.id
    }*/
    this.props.addDetail(this.state.productOffer);
    alert("añadido a carrito");
    }
//<Link className="nav-link" to='/Products'>Productos</Link>
    onclick() {
        return (
            <Link className="" to='/Products'></Link>
        )
    }

    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card">
                    <img src={this.state.productOffer.image} alt="sin Imagen" className="card-img-top"/>
                    <div className="card-body">
                        <p className="card-text">{this.state.productOffer.name}</p>
                        <p className="card-text">{this.state.productOffer.description}</p>
                        <p className="card-text">Valor {this.state.productOffer.price}</p>

                    </div>
                    <div className="container p-4">
                        <form onSubmit={this.Register}>
                            <div className="form-group">
                                <label htmlFor="name">Añadir Cantidad</label>
                                <input type="number" className="form-control" id="quantity" placeholder="Add quantity"
                                       onChange={this.onChangeQuantity}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Añadir Detalles</label>
                                <input type="text" className="form-control" id="name" placeholder="Details"
                                       onChange={this.onChangeObservation}></input>

                                <button type="submit" className="btn btn-primary btn-block" to='/Products'
                                        onSubmit={this.Register} onClick={this.onclick}>Añadir a carrito
                                </button>
                                <Link type="submit" className="btn btn-primary btn-block" to='/Products'>Volver a
                                    Productos </Link>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default ShoppingProduct;
/*





                              <button className="btn btn-primary" to='/Products'  onSubmit={this.Register}>Añadir a carrito</button>
<button type="submit" className="btn btn-primary" to='/Products'  onSubmit={this.Register}>Añadir a carrito</button>
 */
