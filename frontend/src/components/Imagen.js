// eslint-disable-next-line
import React, {Component} from 'react';


const Imagen = (props) => {
    const urlImage = props.product.image;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={urlImage} alt="sin Imagen" className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">{props.product.name}</p>
                    <p className="card-text">{props.product.description}</p>
                    <a href="#" targer="_blank" className="btn btn-primary btn-block">Ver Imagen</a>
                </div>
            </div>
        </div>
    );
}

export default Imagen;