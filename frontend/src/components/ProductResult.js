import React, {Component} from 'react';
import Imagen from './Imagen';
import axios from "axios";

class ProductResult extends Component {

    constructor(props){
        super(props);
    }

state={
        product:{}
}
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

    render() {
        return (


            <div>
                {this.state.product.map(product => (
                    <div>product.id</div>
                ))}
            </div>
            );
    }

}

export default ProductResult;