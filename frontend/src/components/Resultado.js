import React, {Component} from 'react';
import Imagen from './Imagen';

class Resultado extends Component {

    constructor(props){
        super(props);
    }
    state={
        details:[]
    }
    onclick = (id) =>{
        this.props.goToAddProduct(id)
    }
    
    mostrarImagenes = () => {

        const products = this.props.products;
        if (products.length === 0) return null;//if there are not products is null

        console.log(products);

        return (//shows results of Images in the screem
            <React.Fragment>
                <div className="col-12  row">
                    {products.map(product => (
                        <Imagen
                            addDetail={this.props.addDetail}
                            key={product.id}
                            product={product}
                            goToAddProduct = {this.props.goToAddProduct}
                            idOrder={this.props.idOrder}
                        />
                    ))}

                </div>
            </React.Fragment>
        );
    }

    render() {
        return (
            <React.Fragment>
                {this.mostrarImagenes()}
            </React.Fragment>
        );
    }

}

export default Resultado;