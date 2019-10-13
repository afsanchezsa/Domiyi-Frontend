import React from 'react';
import ReactDom from 'react-dom';
import Search from './components/Search';
import Resultado from './components/Resultado';



//import './App.css';


class App extends React.Component {

    state = {
        termino: '',
        imagenes: []
    }

    consultarApi = () => {
        const busq = this.state.termino;
        const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${busq}`;
        console.log(url);

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => this.setState({ imagenes: resultado.hits }))

    }

    dataSearch = (termino) => {
        this.setState({
            termino
        }, () => {
            this.consultarApi();
        })

    }
    render() {
        return (
            <div className="app container">
                <div className="jumbotron">

                    <p className="lead text-center">Productos</p>
                    <Search dataSearch={this.dataSearch} />
                </div>
                < Resultado
                    imagenes={this.state.imagenes}
                />
            </div>

        );
    }

}
export default App;
