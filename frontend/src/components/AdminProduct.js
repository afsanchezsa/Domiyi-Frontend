// eslint-disable-next-line
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//this shows a card with every product


class AdminProduct extends React.Component {
    constructor(props) {
        super(props);
    }

  


    render() {
        return (
            <div className="col-sm-4">
                <div className="card">
                    <img src={this.props.product.image} alt="sin Imagen" className="card-img-top"/>
                    <div className="card-body">
                        <p className="card-text">{this.props.product.name}</p>
                        <p className="card-text">{this.props.product.description}</p>
                        <Link className="btn btn-primary btn-block" onClick={this.onclick}
                              to={{pathname:'/EditProduct',state:{product:this.props.product}}}>Editar</Link>
                      <Link className="btn btn-primary btn-block" onClick={this.onclick}
                              to={{pathname:'/AddPromo',state:{product:this.props.product}}}>Añadir Promocion</Link>
                    
                    
                    </div>

                </div>
            </div>
        );
    }
}

export default AdminProduct;

