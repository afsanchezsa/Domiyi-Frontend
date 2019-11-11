import React, {Component} from 'react';
import axios from 'axios'
import ls from 'local-storage'

class FormCompany extends Component {
    constructor(props){
        super(props);
        //alert(this.props.numero);
    }
    state = {
        states:[],
        idStatus:"",
        idAdmin: "",
        name: "",//the json object,
        image: "",
        deliveryCost:""

    }

    async componentDidMount(){
        const st = await axios.get(`http://localhost:3000/companiesStatus`);
   
        this.setState({
            states: st.data
        });
    }


    onChangeIdStatus = (e) => {
        var i;
        var selected=e.target.value;
        for(i=0;i<this.state.states.length;i++){
            if(this.state.states[i].status==selected){
                this.setState({
                    status:this.state.states[i].id

                });
                break;
            }
        }
    }
    onChangeIdAdmin=(e)=>{
        this.setState({
            idAdmin:e.target.value
        });
    }
    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    onChangeDeliveryCost = (e) => {
        this.setState({
            deliveryCost: e.target.value
        });
    }
    Register = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/company/register', {
            idStatus:this.state.status,
            idAdmin: this.state.idAdmin,
            name: this.state.name,
            image: "No disponible",//no available until this functionality be implemented
            deliveryCost: this.state.deliveryCost
        });

        alert("registro exitoso");
//evita que al presionar el boton el formulario se limpie
    }

    render() {
        return (
            <div className="container p-4">
                <form onSubmit={this.Register}>

                    <div className="form-group">
                        <label htmlFor="Status">Status</label>
                        <select className="form-control" onChange={this.onChangeIdStatus}>
                            <option value="" disabled selected>-- Seleccione un status --</option>
                            {this.state.states.map(st =>
                                <option key={st.id} value={st.status}>{st.status}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name of Company"
                               onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label for="Image">Image</label>
                        <input type="file" className="form-control-file" id="Image"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">DeliveryCost</label>
                        <input type="text" className="form-control" id="name" placeholder="Delivery Cost of Company"
                               onChange={this.onChangeDeliveryCost}></input>
                    </div>

                    <button type="submit" className="btn btn-primary" onSubmit={this.Register}>Registrar</button>
                </form>

            </div>

        );
    }
}

export default FormCompany;