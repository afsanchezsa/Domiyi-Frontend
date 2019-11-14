// eslint-disable-next-line
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//this shows a card with every product


class Imagen extends React.Component {
    constructor(props) {
        super(props);
    }

    onclick = () => {

        //alert(this.props.product.id);
        this.props.goToAddProduct(this.props.product);

//        alert("Hola Estoy aca")
    }


    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card">
                    <img src={this.props.product.image} alt="sin Imagen" className="card-img-top"/>
                    <div className="card-body">
                        <p className="card-text">{this.props.product.name}</p>
                        <p className="card-text">{this.props.product.description}</p>
                        <Link className="btn btn-primary btn-block" onClick={this.onclick}
                              to='/addProduct'>Comprar</Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default Imagen;

//<a targer="_blank" className="btn btn-primary btn-block" onClick={this.onclick}>Comprar</a>