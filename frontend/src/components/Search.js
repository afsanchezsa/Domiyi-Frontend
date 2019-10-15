import React, {Component} from 'react';

class Search extends Component {

    searchRef = React.createRef(); /*leer el input */
    getDatas = (e) => {
        e.preventDefault();

        /**se obtiene el valor de la barra de bsuqueda */
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