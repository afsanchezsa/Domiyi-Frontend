import React, {Component} from 'react';

import axios from 'axios';
import {Link} from 'react-router-dom';
import ls from 'local-storage'
import ResultOrder from "./ResultOrder";
import Host from '../Utilities/ServerUtilities'

class Orders extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        orders: []
    }
    async componentDidMount() {
        var res;
        console.log(res);
        try {
            res = await axios.post(Host + '/order/byAdmin', {
                token: ls.get('token')
            });
            this.setState({
                orders: res.data
            });
        } catch (e) {
            if (e.response.status == 401) {
                // this.props.Login();
                console.log("hubo error ")
            }
        }
    }
    render() {
        return (
            <div className="app container">
                <div className="jumbotron">

                    <p className="lead text-center">Ordenes Pendientes</p>
                </div>
                <div>
                    < ResultOrder
                        orders={this.state.orders}
                    />
                </div>
                <Link className="btn btn-primary btn-block" to='/Products'>Volver</Link>
            </div>
        );
    }

}

export default Orders;


