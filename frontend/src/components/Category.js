import React from 'react';
import axios from 'axios';
import ls from 'local-storage'

//import './App.css';


class Category extends React.Component {
    constructor(props) {
        super(props);

    }

    state = {
        id: [],
        categories: [],
        category: ""
    };

    async componentDidMount() {
        var res;
        try {
            res = await axios.get(`http://localhost:3000/categories`, {
                headers: {
                    authorization: ls.get('token')
                }
            });
            this.setState({
                categories: res.data
            });
        } catch (e) {
            if (e.response.status === 401) {
                this.props.Login();
            }
        }

    }

    onChangeCategories = (e) => {
        var i;
        var selected = e.target.value;
        for (i = 0; i < this.state.categories.length; i++) {
            if (this.state.categories[i].status == selected) {
                this.setState({
                    status: this.state.categories[i].id
                });
                break;
            }
        }
    }

    handleClick = async (id, e) =>{
        alert("my id is: "+id);
    }

/*    enviarId = async (e) => {

        e.preventDefault();
        const res = await axios.post('http://localhost:3000/companyrequestbyid', {
            id: this.state.id
        });
        alert("Se envio ID");

        //evita que al presionar el boton el formulario se limpie
    }*/

    render() {
        return (
            <div className="container">
                {this.state.categories.map(ct =>
                    <li className='list-group-item' key={ct.id} value={ct.category}>
                        <button onClick={(e) => this.handleClick(ct.id,e)}>
                            {ct.category}
                        </button>
                    </li>
                )}
            </div>
        );
    }

}
export default Category;