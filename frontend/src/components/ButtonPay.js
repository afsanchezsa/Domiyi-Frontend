import React, { Component } from 'react';
import axios from 'axios'
import ls from 'local-storage'
import Host from '../Utilities/ServerUtilities'
class ButtonPay extends Component {
    constructor(props) {
        super(props);
        //alert(this.props.numero);
    }
    state = {
        states: [],
        idStatus: "",
        idAdmin: 1,
        name: "", //the json object,
        image: "",
        deliveryCost: ""

    }

    async componentDidMount() {
        const st = await axios.get(Host + '/companiesStatus');

        this.setState({
            states: st.data
        });
    }

    onChangeIdStatus = (e) => {
        var i;
        var selected = e.target.value;
        for (i = 0; i < this.state.states.length; i++) {
            if (this.state.states[i].status == selected) {
                this.setState({
                    status: this.state.states[i].id

                });
                break;
            }
        }


    }
    onChangeIdAdmin = (e) => {
        this.setState({
            idAdmin: e.target.value
        });
    }
    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    onChangeUrl = (e) => {
        this.setState({
            image: e.target.value
        });
    }
    onChangeDeliveryCost = (e) => {
        this.setState({
            deliveryCost: e.target.value
        });
    }
    Register = async(e) => {
        e.preventDefault();
        const res = await axios.post(Host + '/company/register', {
            idStatus: this.state.status,
            idAdmin: this.state.idAdmin,
            name: this.state.name,
            image: this.state.image, //no available until this functionality be implemented
            deliveryCost: this.state.deliveryCost
        }, {
            headers: {
                authorization: ls.get('token')

            }
        });

        alert("registro exitoso");
        //evita que al presionar el boton el formulario se limpie
    }

    render() {
        return ( <
            div className = "container p-4 col-md-7 col-sm-10" >
            <
            form onSubmit = { this.Register }
            className = "text-center border border-light " >
            <
            p class = "h4 mb-4" > Registra tu Compañia < /p> <
            div className = "form-group" >
            <
            label htmlFor = "Status" > Status < /label> <
            select className = "form-control mb-4"
            onChange = { this.onChangeIdStatus } >
            <
            option value = ""
            disabled selected > --Seleccione un status-- < /option> {
                this.state.states.map(st =>
                    <
                    option key = { st.id }
                    value = { st.status } > { st.status } < /option>
                )
            } <
            /select> <
            /div> <
            div className = "form-group" >
            <
            label
            for = "name" > Name < /label> <
            input type = "text"
            className = "form-control mb-4"
            id = "name"
            placeholder = "Name of Company"
            onChange = { this.onChangeName } > < /input> <
            /div> <
            div className = "form-group" >
            <
            label htmlFor = "Image URL" > Image < /label> <
            input type = "text"
            className = "form-control mb-4"
            id = "image"
            placeholder = "Company Image"
            onChange = { this.onChangeUrl } > < /input> <
            /div> <
            div className = "form-group" >
            <
            label
            for = "Image" > Image < /label> <
            input type = "file"
            className = "form-control-file"
            id = "Image" > < /input> <
            /div> <
            div className = "form-group" >
            <
            label htmlFor = "name" > DeliveryCost < /label> <
            input type = "text"
            className = "form-control mb-4"
            id = "name"
            placeholder = "Delivery Cost of Company"
            onChange = { this.onChangeDeliveryCost } > < /input> <
            /div>

            <
            button type = "submit"
            className = "btn btn-primary"
            onSubmit = { this.Register } > Registrar < /button> <
            /form>

            <
            /div>

        );
    }
}

export default FormCompany;