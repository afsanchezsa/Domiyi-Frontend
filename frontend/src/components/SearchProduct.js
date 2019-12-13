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
            <div className="container  col-md-11 col-sm-8">
               <div className="form-group row">
               <input className="form-control offset-sm-0 offset-md-3 col-sm-4" type="search"
                           value = {this.state.search}
                           onChange = {this.updateSearch.bind(this)}
                           placeholder="Buscar"
                           aria-label="Search"

                    >
                    </input>
                     <button className="btn btn-outline-success " onClick={()=>{}}>Buscar Producto</button>
               
                
               </div>
                    
                    <div className="container mt-4">

                    

                    

                        </div>
                        < Resultado
                            products={this.state.products}
                            goToAddProduct={this.props.goToAddProduct}
                            idOrder={this.props.idOrder}
                        />
                    
                
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