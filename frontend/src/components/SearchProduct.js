import React, {Component} from 'react';
import Resultado from "./Resultado";
import axios from 'axios'
import ls from 'local-storage'
import Host from '../Utilities/ServerUtilities'


class SearchProduct extends Component {
    constructor(props){
        super(props);

    }
    state = {
        states:[],
        products : [],
        search: ""
    }
    async updateSearch(event){
        this.setState({search : event.target.value})
        var res;
        try {
            res = await axios.post(Host + '/product/getByWord', {
                name : this.state.search
            }, {

                headers: {
                    authorization: ls.get('token')

                }
            });
            this.setState({
                products: res.data
            });
        } catch (e) {
            if (e.response.status == 401) {
                this.props.Login();
            }
        }
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
                <ul>
                    <div className="app container">

                        <div className="jumbotron">

                            <p className="lead text-center">Compañias</p>

                        </div>
                        < Resultado
                            products={this.state.products}
                            goToAddProduct={this.props.goToAddProduct}
                            idOrder={this.props.idOrder}
                        />
                    </div>
                </ul>
            </div>

        );
    }
}

export default SearchProduct;
/*
import React, {Component} from 'react';

class Search extends Component {

    searchRef = React.createRef();
getDatas = (e) => {
    e.preventDefault();


    this.props.dataSearch(this.searchRef.current.value);
}

render() {
    return (
        <form onSubmit={this.getDatas}>
            <div className="row">

                <div className="form-group col-md-8">
                    <input ref={this.searchRef} type="text" className="form-control from-control-lg"
                           placeholder="Buscar producto"/>
                </div>

                <div className="form-group col-md-4">
                    <input type="submit" className="btn btn-lg btn-block" value="Buscar"/>
                </div>
            </div>
        </form>
    );
}

}


export default Search;
 */