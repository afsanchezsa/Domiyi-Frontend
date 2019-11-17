import React from 'react';
import axios from "axios";
import ls from "local-storage";
import Host from "../Utilities/ServerUtilities";
import ResultCompany from './ResultCompany';




class ListCompany extends React.Component {
    constructor(props) {
        super(props);
    }
    state ={
        Companies: []
    }
    async componentDidMount(){
        var res;
        try{
            res = await axios.post(Host+`/company`,{

            },{
                headers:{
                    authorization:ls.get('token')
                }
            });
            this.setState({
                Companies: res.data
            });
        }catch(e){
            if(e.response.status==401){

            }}
    }
    render() {
        return (
            <div className="app container">
                <div className="jumbotron">
                    <p className="lead text-center">Compañias</p>
                </div>
                < ResultCompany
                    Companies={this.state.Companies}
                />

            </div>
        )
    }

}
export default ListCompany;
