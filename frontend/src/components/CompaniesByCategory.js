//post('/companies/idAdmin

import React from 'react';
import Search from './Search';
import axios from 'axios';
import ls from 'local-storage'
import Host from '../Utilities/ServerUtilities'
import CompanyCategoryResult from "./CompanyCategoryResult";

//import './App.css';


class CompaniesByCategory extends React.Component {
    constructor(props) {
        super(props);

    }


    state = {
        states :[],
        companies: [],
    }

    async componentDidMount() {
        var res;
        try {
            res = await axios.post(Host + '/companiesBy/category', {
                idCategory : this.props.location.state.idCategory
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
                //this.props.Login();
            }
        }
    }
    render() {
        return (
            <div className="app container">

                <div className="jumbotron">

                    <p className="lead text-center">Compañias</p>

                </div>
                < CompanyCategoryResult
                    companies = {this.state.companies}
                />
            </div>
        );
    }

}

export default CompaniesByCategory;
