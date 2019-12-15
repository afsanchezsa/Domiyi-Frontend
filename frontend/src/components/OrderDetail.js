// eslint-disable-next-line
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './OrdenPendiente.css'

//this shows a card with every product


class OrderDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.order


    }



    renderTableData() {
        //this.props.order.
        return (() => {
            return (
                console.log(this.state)
            )
        })
    }

    render() {
        return (
                <tr>
                <td>{this.props.order.idOrder}</td>
                <td>{this.props.order.name}</td>
                <td>{this.props.order.quantity}</td>
                <td>{this.props.order.observation}</td>
                <td>{this.props.order.unitPrice}</td>
                <td>{this.props.order.address}</td>
                <td>{this.props.order.date}</td>
                <td>{this.props.order.status}</td>
                </tr>
        );
    }
}

export default OrderDetail;

