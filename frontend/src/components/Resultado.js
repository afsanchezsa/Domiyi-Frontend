import React, {Component} from 'react';
import Imagen from './Imagen';

class Resultado extends Component {

    mostrarImagenes = () => {

        const products = this.props.products;
        if (products.length === 0) return null;//if there are not products is null

        console.log(products);

        return (//shows results of Images in the screem
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {products.map(product => (
                        <Imagen
                            key={product.id}
                            product={product}
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