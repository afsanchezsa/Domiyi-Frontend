//'/products/price'

import React, {Component} from 'react';
import Resultado from "./Resultado";
import axios from 'axios'
import ls from 'local-storage'
import Host from '../Utilities/ServerUtilities'
import {Link} from 'react-router-dom';


class PriceRange extends Component {
    constructor(props) {
        super(props);

    }

    state = {
        states: [],
        minValue: "",
        maxValue: ""

    }

    async minValue(event) {
        this.setState({minValue: event.target.value})
    }

    async maxValue(event) {
        this.setState({maxValue: event.target.value});
    }

    render() {
        return (
            <div className="container p-4 col-md-7 col-sm-10">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search"
                           value={this.state.minValue}
                           onChange={this.minValue.bind(this)}
                           placeholder="Precio Menor"
                           aria-label="Search"

                    >
                    </input>
                    <input className="form-control mr-sm-2" type="search"
                           value={this.state.maxValue}
                           onChange={this.maxValue.bind(this)}
                           placeholder="Precio Mayor"
                           aria-label="Search"

                    >
                    </input>
                    <Link className="btn btn-primary btn-block" onClick={this.onclick}
                          to={{
                              pathname: '/ProductsByPriceSearch',
                              state: {minValue: this.state.minValue, maxValue: this.state.maxValue}
                          }}>Buscar Productos</Link>
                </form>
            </div>

        );
    }
}

export default PriceRange;
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