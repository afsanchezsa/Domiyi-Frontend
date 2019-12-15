import React from 'react';

import axios from 'axios';
import ls from 'local-storage'
import Host from '../Utilities/ServerUtilities'
import AdminProduct from './AdminProduct';
import ResultEditProduct from './ResultEditProduct';


class ListProductToEdit extends React.Component {
    constructor(props) {
        super(props);
    }


    state = {
        idCompany:'',
        products: []
    }

    async componentDidMount() {
        var res;

            try{
                 res = await axios.post(Host+'/productOffer/ByIdCompany',{
                idCompany:this.props.location.state.idCompany
                    
                 },{
                  
                headers: {
                    authorization: ls.get('token')

                }
            });
            this.setState({
                products: res.data
            });
        } catch (e) {
            if (e.response.status == 401) {
                alert("Realizar log-in");
            }
        }


    }

    render() {
        return (
            <div className="app container">

                <div className="jumbotron">

                    <p className="lead text-center">Productos</p>

                </div>
                < ResultEditProduct
                    products={this.state.products}
                    />
            </div>
        );
    }

}

export default ListProductToEdit;
