import React, {Component} from 'react';
import axios from 'axios'
import ls from 'local-storage'
import Imagen from './Imagen'
class Cart extends Component {
    constructor(props){
        super(props);
        this.setState({
            idOrder:this.props.idOrder
        });
    }
    state = {
       idOrder:"",
       products:new Map(),
       details:[],
       idsProductOffer:[],
       idsProducts:[]
       

    }
    async componentDidMount() {
                /*try{
                    pr = await axios.post(`http://localhost:3000/products`,{
                    
                    });
                    pr.map(p=>{
                        this.setState(
                            this.state.products.set(p.id,p)
                        )
                    });
                    dt= axios.post(`http://localhost:3000/detail/byIdOrder`,{
                        idOrder:this.state.idOrder
                    }).then(()=>{
                        this.setState({
                            details:dt
                        });
                        this.state.details.map(d=>{
                            axios.post(`http://localhost:3000/`)
                        })
                    });
                    
                    

                }catch(e){

                }*/
                const idsProductOffer=axios.post(`http://localhost:3000/detail/idsbyIdOrder`,{
                        idOrder:this.state.idOrder
                    }).then(()=>{
                        
                        this.setState({
                            idsProductOffer:idsProductOffer
                        })

                    }).then(()=>{
                        const idsproducts=axios.post('http://localhost:3000/productOffer/IdsProductById',{
                            ids:this.state.idsProductOffer
                        });
                        this.setState({
                            idsProducts:idsproducts

                        });
                    }).then(()=>{
                        var i;
                        var dict=new Map();
                        for(i=0;i<this.state.idsProducts.length;i++){
                        var pr=axios.post('http://localhost:3000/products/id',
                        {
                            id:this.state.idsProducts[i].idProduct
                        }).then(()=>{
                            dict.push(pr.id,pr);
                        })
                        }
                         this.setState({
                        products:dict
                        });
                   
                    });
      }


    render() {
        return (
            <div className="container p-4">
            {this.state.details.map(dt=>
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