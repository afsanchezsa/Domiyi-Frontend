import React, {Component} from 'react';
import axios from 'axios'
import ls from 'local-storage'
import Host from '../Utilities/ServerUtilities'

class Efectivo extends Component {

    state = {
        name: "",
        lastName: "",
        card: "",
        dueDate: "",
        CSC: ""

    };
    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    };
    onChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        });
    };
    onChangeCard = (e) => {
        this.setState({
            card: e.target.value
        });
    };
    onChangeDueDate = (e) => {
        this.setState({
            dueDate: e.target.value
        });
    };
    onChangeCSC = (e) => {
        this.setState({
            CSC: e.target.value
        });
    };

    Send = async (e) => {
        e.preventDefault();
        const res = await axios.post(Host+'/paypal', {
            name: this.state.name,
            lastName: this.state.lastName,
            card: this.state.card,
            dueDate: this.state.dueDate,
            CSC: this.state.CSC,
        },{
            headers: {
                authorization: ls.get('token')
            }
        });
        alert("Pago Realizado");
    };

    render() {
        return (
            <div className="container p-4 col-md-7 col-sm-10">
                <form onSubmit={this.Send} className="text-center border border-light ">
                    <img src="https://image.flaticon.com/icons/svg/1554/1554406.svg" />
                    <p class="h4 mb-4">Efectivo</p>

                    <button type="submit" className="btn btn-primary" onSubmit={this.Send}>Pago Contraentrega</button>
                </form>

            </div>

        );
    }
}

export default Efectivo;