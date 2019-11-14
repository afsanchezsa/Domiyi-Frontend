import React, {Component} from 'react';
import axios from 'axios'
import ls from 'local-storage'
import Imagen from './Imagen'
import Host from '../Utilities/ServerUtilities'
class Cart extends Component {
    constructor(props){
        super(props);
        this.setState({
            idOrder:this.props.idOrder
        });
    }
    state = {
       idOrder:"",
       products:[],
       details:[],
       idsProductOffer:[],
       idsProducts:[]
       

    }
    componentDidMount() {
        
                
                const idsProductOffer=axios.post(Host+'/detail/idsbyIdOrder',{
                        idOrder:3
                    }).then(()=>{
                        console.log(idsProductOffer);
                        this.setState({
                            idsProductOffer:idsProductOffer
                        });
                        

                    }).then(()=>{
                        console.log(this.state.idsProductOffer);
                        const idsproducts=axios.post('http://'+Host+'/productOffer/IdsProductById',{
                            ids:this.state.idsProductOffer
                        });
                        this.setState({
                            idsProducts:idsproducts

                        });
                    }).then(()=>{
                        var i;
                        var dict=[];
                        for(i=0;i<this.state.idsProducts.length;i++){
                        var pr=axios.post('http://'+Host+'/products/id',
                        {
                            id:this.state.idsProducts[i].idProduct
                        }).then(()=>{
                            dict.push(pr);
                        })
                        }
                         this.setState({
                        products:dict
                        });
                   
                    }).catch(e=>{
                        console.log(e);
                    });
      }


    render() {
        return (
            <div className="container p-4">
            {this.state.products.map(dt=>
                <div>
                  <Imagen
                            key={dt.idProduct}
                            product={this.state.products.get(dt.idProduct)}
                            goToAddProduct = {()=>{}}
                        />
                        <p>{dt.quantity}</p>
                </div>
                )}                
            </div>

        );
    }
}

export default Cart;