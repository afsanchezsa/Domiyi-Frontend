import React from 'react';
import Resultado from './Resultado';
import axios from 'axios';
import ls from 'local-storage'
import Host from '../Utilities/ServerUtilities'

class ProductsByPriceSearch extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        minValue: this.props.location.state.minValue,
        maxValue: this.props.location.state.maxValue,
        products: []
    }
    async componentDidMount() {

        var res;
        try {

            res = await axios.post(Host + '/products/price', {
                price: this.props.location.state.minValue,
                price2: this.props.location.state.maxValue
            }, {
                headers: {
                    authorization: ls.get('token')
                }
            });
            this.setState({
                products: res.data
            });

        } catch (e) {
            if (e.response.status == 401) {
                this.props.Login();
            }
        }

    }

    render() {
        return (
            <div className="app container">

                <div className="jumbotron">

                    <p className="lead text-center">Productos</p>

                </div>
                < Resultado
                    products={this.state.products}
                    goToAddProduct={this.props.goToAddProduct}
                    idOrder={this.props.idOrder}
                />
            </div>
        );
    }

}

export default ProductsByPriceSearch;
