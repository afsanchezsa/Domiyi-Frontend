import React, {Component} from 'react';
import axios from 'axios';
import ls from 'local-storage'
import Host from '../Utilities/ServerUtilities'
import {Link} from "react-router-dom";

class TypeUser extends Component {
    constructor(props) {
        super(props);

    }
    variable = "nada";
    state = {
        companies: []
    }


    async componentDidMount() {
        var res;
        try {
            res = await axios.post(Host + '/companies/idAdmin', {

            }, {

                headers: {
                    authorization: ls.get('token')

                }
            });
            this.ClientorStore()
            this.setState({
                companies: res.data
            });
        } catch (e) {
            if (e.response.status == 401) {
                this.variable = "no log"
            }
        }
    }

    ClientorStore = () => {
        alert("hola")
        const companiese = this.state.companies
        if (companiese.length === 0) this.variable = "Usuario"
        else{
            this.variable="Compania"
        }
    }
    render() {

        return (
            <div className="container p-4 col-md-7 col-sm-10">
                <p className="h4 mb-4">Usuarios</p>
                <p className="h4 mb-4">this.variable</p>
                <p className="card-text">{this.variable}</p>
            </div>

        );
    }
}

export default TypeUser;
