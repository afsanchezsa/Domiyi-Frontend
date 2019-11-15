import React, {Component} from 'react';
import OrderDetail from './OrderDetail';

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
                    {orders.map(order => (
                        <OrderDetail
                            key={order.id}
                            order={order}
                        />
                    ))}
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