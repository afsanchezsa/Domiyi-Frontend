import React from 'react';
import axios from 'axios';
import ls from 'local-storage'
import './category.css';

//import './App.css';


class Category extends React.Component {
 /*   constructor(props) {
        super(props);

    }

    state = {
        id: [],
        categories: [],
        linkimg: [],
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
                    category: this.state.categories[i].id
                });
                break;
            }
        }
    };

    handleClick = async (id, e) =>{
        alert("my id is: "+id);
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/products/idCompanybycategory',{
        idCategory: this.state.id
    });


    };

    render() {
        return (
            <div className="container">
                {this.state.categories.map(ct =>
                    <li className='list-group-item' key={ct.id} value={ct.category}>
                        <div className="imgSize" >
                            <img src={ct.linkimg}/>
                        </div>

                        <button onClick={(e) => this.handleClick(ct.id,e)}>
                            {ct.category}
                        </button>
 </li>
                )}
            </div>
        );
    }*/

    constructor(props){
        super(props);
        //alert(this.props.numero);
    }

    state = {
        id: "",
        categories: [],
        linkimg: "",
        category: ""
    };

    async componentDidMount(){
        const ct = await axios.get(`http://localhost:3000/categories`);

        this.setState({
            categories: ct.data
        });
    }

    onChangeCategories = (e) => {
        var i;
        var selected = e.target.value;
        for (i = 0; i < this.state.categories.length; i++) {
            if (this.state.categories[i].category === selected) {
                this.setState({
                    category: this.state.categories[i].id
                });
                break;
            }
        }
    };

    Register = async (e) => {
        console.log(this.state.category)
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/products/idCompanybycategory', {
            idCategory: this.state.category
        });
        console.log(res.data)

//evita que al presionar el boton el formulario se limpie
    }



    render() {
        return (
            <div className="container p-4">
                <form onSubmit={this.Register}>
                    <div className="form-group">
                        <label htmlFor="Status">Categoria</label>
                        <select className="form-control" onChange={this.onChangeCategories}>
                            <option value="" disabled selected>-- Seleccione una categoria --</option>
                            {this.state.categories.map(ct =>
                                <option key={ct.id} value={ct.category}>{ct.category}</option>
                            )}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary" onSubmit={this.Register}>Seleccionar</button>
                </form>
            </div>
        );
    }
}
export default Category;