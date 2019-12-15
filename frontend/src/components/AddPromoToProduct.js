// eslint-disable-next-line
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import ls from 'local-storage'
import Host from '../Utilities/ServerUtilities'

//this shows a card with every product


class EditProduct extends React.Component {
    
    
    constructor(props) {
        super(props);
        }
        state = {
            typeoffer:[],
            offer:this.props.location.state.product.type,
            value:this.props.location.state.product.value,
            product:this.props.location.state.product,
            idOffer:this.props.location.state.product.idOffer,
            idTypeOffer:this.props.location.state.product.idTypeOffer,
            idofferReturned:''
            
        }
    
    
    async componentDidMount() {
        var res;

    
             res = await axios.get(Host+'/typeoffers',{
              
            headers: {
                authorization: ls.get('token')

            }
        });
        
        this.setState({
           typeoffer:res.data 
           
        });
    
    }
    onChangeValue=(e)=>{
        this.setState({

            value:e.target.value
        });
        
    }
    onChangeTypeOffer=(e)=>{
        var i=0;
        var newOffer=this.state.offer;
        for (i=0;i<this.state.typeoffer.length;i++){
            if(this.state.typeoffer[i].type==e.target.value){
                newOffer=this.state.typeoffer[i];
                break;
            }
        }
        this.setState({
            offer:newOffer.type,
            idTypeOffer:newOffer.id
                    });
    
    }
     ApplyPromo=(e)=>{
        e.preventDefault();
      const firsRequest= axios.post(Host+'/offer/register',{
            value:this.state.value,
        	idType:this.state.idTypeOffer
        },{
            headers:{
                authorization: ls.get('token')
            }
        });/*.then((offer)=>{
            
            this.setState({
                idofferReturned:offer.data.id
            });
             });
        */
        
        firsRequest.then((offer)=>{
            
            var newIdOffer;
            if(!offer.data.id){
                newIdOffer=offer.data[0].id;//si ya existia la oferta me retorna un arreglo
            }else{
                newIdOffer=offer.data.id;
            }
            
            console.log("id is "+newIdOffer);
            const inserted=axios.post(Host+'/productOffer/register', 
            {   
               idProduct:this.state.product.id,
               idOffer:newIdOffer
                        }
            
            ,{
                headers: {
                    authorization: ls.get('token')
    
                }
            });
            
            alert("registro exitoso");
            
        })
        
            
            
/*            Promise.all([firsRequest]).then(()=>{
                return inserted
            })
  */      
        
          

    }

    render() {
        return (
            <div className="container p-4 col-md-7 col-sm-10">
                <form onSubmit={this.Register} className="text-center border border-light ">
                    <p class="h4 mb-4">Edita el Producto</p>
                    <img src={this.props.location.state.product.image} alt="sin Imagen" className="col-sm-10 col-md-6"/>
                    <div className="form-group ">
                        <label for="IdStatus">Status</label>
                        <select className="form-control mb-4" onChange={this.onChangeTypeOffer} value={this.state.offer} >
                            <option value="" disabled selected>--seleccione Tipo de Promocion--</option>
                            {this.state.typeoffer.map(of =>
                                <option key={of.id} value={of.type}>{of.type}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="value">Value</label>
                        <input type="number" className="form-control mb-4" id="value" placeholder="Value"
                               onChange={this.onChangeValue} value={this.state.value}></input>
                    </div>
                   
                    

                    <button type="submit" className="btn btn-info btn-block my-4" onClick={this.ApplyPromo}> Aplicar Promoción
                    </button>
                </form>

            </div>
        );
    }
}

export default EditProduct;

//<a targer="_blank" className="btn btn-primary btn-block" onClick={this.onclick}>Comprar</a>