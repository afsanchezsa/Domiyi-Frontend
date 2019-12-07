import React, {Component} from 'react';
import axios from 'axios'
import ls from 'local-storage'
import Host from '../Utilities/ServerUtilities'
class PayPal extends Component {
    constructor(props){
        super(props);
        //alert(this.props.numero);
    }
    state = {
        name: "",
        lastName: "",
        card: "",
        dueDate: "",
        CSC: ""

    }

    async componentDidMount(){
        const st = await axios.get(Host+'/companiesStatus');

        this.setState({
            states: st.data
        });
    }

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
            lastName: this.state.name,
            card: this.state.name,
            dueDate: this.state.name,
            CSC: this.state.name,
        },{
            headers: {
                authorization: ls.get('token')

            }
        });

        alert("Pago Realizado");
//evita que al presionar el boton el formulario se limpie
    }

    render() {
        return (
            <div className="container p-4 col-md-7 col-sm-10">
                <form onSubmit={this.Send} className="text-center border border-light ">
                    <img src="https://icon-library.net/images/pay-pal-icon/pay-pal-icon-27.jpg" ></img>
                    <p class="h4 mb-4">PayPal</p>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" className="form-control mb-4" id="name" placeholder="Nombre"
                               onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Apellido</label>
                        <input type="text" className="form-control mb-4" id="lastName" placeholder="Apellido"
                               onChange={this.onChangeLastName}></input>
                    </div>
                    <div className="form-group">
                        <label for="name">Número de Tarjeta</label>
                        <input type="text" className="form-control mb-4" id="card" placeholder="ej: 0000-0000-0000"
                               onChange={this.onChangeCard}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Image URL">Fehca de Vencimiento</label>
                        <input type="text" className="form-control mb-4" id="dueDate" placeholder="ej: 31/12/2019"
                               onChange={this.onChangeDueDate}></input>
                    </div>
                    <div className="form-group">
                        <label for="Image">CSC</label>
                        <input type="text" className="form-control mb-4" id="CSC" placeholder="ej: 345"
                               onChange={this.onChangeCSC}></input>
                    </div>


                    <button type="submit" className="btn btn-primary" onSubmit={this.Register}>Enviar</button>
                </form>

            </div>

        );
    }
}

export default PayPal;