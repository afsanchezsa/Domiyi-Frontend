//post('/companies/idAdmin

import React from 'react';

import Search from './Search';
import axios from 'axios';
import ls from 'local-storage'
import Host from '../Utilities/ServerUtilities'
import CompanyResult from "./CompanyResult";

//import './App.css';


class CompaniesByIdAdmin extends React.Component {
    constructor(props) {
        super(props);

    }


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
            this.setState({
                companies: res.data
            });
        } catch (e) {
            if (e.response.status == 401) {
                alert("Realizar log-in");
                this.props.history.push("./Login")
            }
        }




    }
    render() {
        return (
            <div className="app container">

                <div className="jumbotron">

                    <p className="lead text-center">Compañias</p>

                </div>
                < CompanyResult
                    companies = {this.state.companies}
                />
            </div>
        );
    }

}

export default CompaniesByIdAdmin;
