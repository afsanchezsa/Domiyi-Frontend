// eslint-disable-next-line
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//this shows a card with every product


class ImageDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card">
                    <img src={this.props.detail.image} alt="sin Imagen" className="card-img-top"/>
                    <div className="card-body">
                        <p className="card-text">{this.props.detail.name}</p>
                        <p className="card-text">{this.props.detail.observation}</p>
                        <p className="card-text">Cantidad: {this.props.detail.quantity}</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default ImageDetail;

//<a targer="_blank" className="btn btn-primary btn-block" onClick={this.onclick}>Comprar</a>