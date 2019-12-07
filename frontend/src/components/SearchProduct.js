import React, {Component} from 'react';
import axios from 'axios'
import ls from 'local-storage'
import Host from '../Utilities/ServerUtilities'
class SearchProduct extends Component {
    constructor(props){
        super(props);

    }
    state = {
        states:[],
        idStatus:"",
        idAdmin: 1,
        name: "",//the json object,
        image: "",
        deliveryCost:"",
        search: "Hello"

    }
    updateSearch(event){
        this.setState({search : event.target.value})
    }


    render() {
        return (
            <div className="container p-4 col-md-7 col-sm-10">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search"
                           value = {this.state.search}
                           onChange = {this.updateSearch.bind(this)}
                           placeholder="Buscar"
                           aria-label="Search"

                    >
                    </input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar Producto</button>

                </form>
            </div>

        );
    }
}

export default SearchProduct;
/*

    async componentDidMount(){
        const st = await axios.get(Host+'/companiesStatus');

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
    Register = async (e) => {
        e.preventDefault();
        const res = await axios.post(Host+'/company/register', {
            idStatus:this.state.status,
            idAdmin: this.state.idAdmin,
            name: this.state.name,
            image: this.state.image,//no available until this functionality be implemented
            deliveryCost: this.state.deliveryCost
        },{
            headers: {
                authorization: ls.get('token')

            }
        });

        alert("registro exitoso");
//evita que al presionar el boton el formulario se limpie
    }
 */
