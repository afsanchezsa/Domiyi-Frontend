// eslint-disable-next-line
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//this shows a card with every product


class CompanyImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.company.id);
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card">
                    <img src={this.props.company.image} alt="sin Imagen" className="card-img-top"/>
                    <div className="card-body">
                        <p className="card-text">{this.props.company.name}</p>
                        <Link className="btn btn-primary btn-block" onClick={this.onclick}
                              to={{pathname:'/ListProductToEdit',state:{idCompany:this.props.company.id}}}>Ver Productos</Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default CompanyImage;

//<a targer="_blank" className="btn btn-primary btn-block" onClick={this.onclick}>Comprar</a>