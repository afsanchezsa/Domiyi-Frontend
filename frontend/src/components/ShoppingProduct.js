// eslint-disable-next-line
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

//this shows a card with every product

class ShoppingProduct extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        states:[],
        idOrder: 1,
        idProductOffer: 1,//the json object,
        quantity: "",
        observation:"",
        unitPrice: this.props.product.price,
        idsDetailscreated:[]
    }
    onChangeQuantity = (e) => {
        this.setState({
            quantity: e.target.value
        });
    }
    onChangeObservation = (e) => {
        this.setState({
            observation: e.target.value
        });
    }

    Register =async (e)=>  {
        e.preventDefault();
try{
    const res = await axios.post('http://localhost:3000/detail/register', {
        idOrder: this.state.idOrder,
        idProductOffer : this.state.idProductOffer,
        quantity : this.state.quantity,
        observation : this.state.observation,
        unitPrice : this.state.unitPrice
    });
    //var ids;
    //ids=this.state.idsDetailscreated;
    //ids.push(res.data.id);
    this.props.addDetail(res.data.id);
       //console.log(this.state.idsDetailscreated);

    alert("registro exitoso");

}catch(e){
console.log(e);
}
    //evita que al presionar el boton el formulario se limpie
    }
//<Link className="nav-link" to='/Products'>Productos</Link>
    onclick (){
        return(
            <Link className="" to ='/Products'></Link>
        )
    }
    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card">
                    <img src={this.props.product.image} alt="sin Imagen" className="card-img-top"/>
                    <div className="card-body">
                        <p className="card-text">{this.props.product.name}</p>
                        <p className="card-text">{this.props.product.description}</p>
                        <p className="card-text">Valor {this.props.product.price}</p>

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

                                <button type="submit" className="btn btn-primary btn-block" to='/Products'  onSubmit={this.Register} onClick={this.onclick}>Añadir a carrito</button>
                                <Link type="submit" className="btn btn-primary btn-block" to='/Products' >Volver a Productos </Link>
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
