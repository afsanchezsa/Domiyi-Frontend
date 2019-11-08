// eslint-disable-next-line
import React, {Component} from 'react';

//this shows a card with every product

class ShoppingProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card">
                    <img src={this.props.product.image} alt="sin Imagen" className="card-img-top"/>
                    <div className="card-body">
                        <p className="card-text">{this.props.product.name}</p>
                        <p className="card-text">{this.props.product.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShoppingProduct;