// eslint-disable-next-line
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//this shows a card with every product


class OrderDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">Numero orden: {this.props.order.idOrder}</p>
                        <p className="card-text">Producto: {this.props.order.name}</p>
                        <p className="card-text">Cantidad: {this.props.order.quantity}</p>
                        <p className="card-text">Observacion: {this.props.order.observation}</p>
                        <p className="card-text">Precio Unidad: {this.props.order.unitPrice}</p>
                        <p className="card-text">Direccion: {this.props.order.address}</p>
                        <p className="card-text">Fecha pedido: {this.props.order.date}</p>
                        <p className="card-text">Status pedido: {this.props.order.status}</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default OrderDetail ;

