import React, {Component} from 'react';
import Imagen from './Imagen';
import AdminProduct from './AdminProduct';

class ResultadoEditProduct extends Component {

    constructor(props){
        super(props);
    }
    

    mostrarImagenes = () => {

        const products = this.props.products;
        if (products.length === 0) return null;//if there are not products is null

        console.log(products);

        return (//shows results of Images in the screem
            <React.Fragment>
                <div className="col-12  row">
                    {products.map(product => (
                        <AdminProduct
                           
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

export default ResultadoEditProduct;