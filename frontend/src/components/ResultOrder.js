import React, {Component} from 'react';
import OrderDetail from './OrderDetail';
import './OrdenPendiente.css'

class ResultOrder extends Component {

    constructor(props){
        super(props);
    }
    showOrders = () => {
        const orders = this.props.orders;
        if (orders.length === 0) return null;//if there are not products is null

        console.log(orders);
        return (//shows results of Images in the screem
            <React.Fragment>
                <div className="col-12 p-5 row">
                    <table id='students'>
                        <tr className="colorTitleTable">
                            <td className="titleTable"><strong>Numero orden:</strong></td>
                            <td className="titleTable"><strong>Producto:</strong></td>
                            <td className="titleTable"><strong>Cantidad:</strong></td>
                            <td className="titleTable"><strong>Observacion:</strong></td>
                            <td className="titleTable"><strong>Precio Unidad:</strong></td>
                            <td className="titleTable"><strong>Direccion:</strong></td>
                            <td className="titleTable"><strong>Fecha pedido:</strong></td>
                            <td className="titleTable"><strong>Status pedido:</strong></td>
                        </tr>


                            {orders.map(order => (
                                <OrderDetail
                                    key={order.id}
                                    order={order}
                                />
                            ))}

                    </table>


                </div>
            </React.Fragment>
        );
    }

    render() {
        return (
            <React.Fragment>
                {this.showOrders()}
            </React.Fragment>
        );
    }

}

export default ResultOrder;