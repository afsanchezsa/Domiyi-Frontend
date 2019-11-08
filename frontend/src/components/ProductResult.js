import React, {Component} from 'react';
import ShoppingProduct from './ShoppingProduct';
import axios from "axios";

class ProductResult extends Component {

    constructor(props) {
        super(props);
    }
/*
    state = {
        product: []
    }

 */
    /*
       async componentDidMount(){


           try{

               const res = await axios.post('http://localhost:3000/products/id', {
                   id : 1
               });
               console.log(res.data);
               this.setState({
                   product:res.data
               });

           }catch(e){
               alert(e);
           }
       }
    */
    mostrarImagenes = () => {

        const product = this.props.product;
        if (product.length === 0) return null;//if there are not products is null

        console.log(product);

        return (//shows results of Images in the screem
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {product.map(pro => (
                        <ShoppingProduct
                            key={pro.id}
                            product={pro}
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
/*
    render() {
        return (

            <div>
                {this.state.product.map(product => (
                    <div>product.id</div>
                ))}
            </div>
        );
    }
*/
}

export default ProductResult;