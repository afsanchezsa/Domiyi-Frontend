import React from 'react'
import {Link} from 'react-router-dom';
import ls from "local-storage";
import TypeUser from "./TypeUser";

// to={{pathname:'/ListProductToEdit',state:{idCompany:this.props.company.id}}}
//to={{pathname:'/CompaniesByCategory',state:{idCategory: 1}}}
function logout() {
        ls.set('token',null)
        alert("Sesion cerrada")
        window.location.reload()
}

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">


                <button type="button" id="sidebarCollapse" className="btn btn-info">
                    <i className="fas fa-align-left"></i>
                    <img
                        src="https://icon-library.net/images/sandwich-menu-icon/sandwich-menu-icon-13.jpg"
                        width="30"
                        height="30" className="d-inline-block align-top" alt="">
                    </img>
                </button>
                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-align-justify"></i>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/Login'>Login</Link>
                        </li>

                        {/*<li className="nav-item">
                            <Link className="nav-link" to='/ProductRegister'>Registro Producto</Link>
                        </li>
                        */ 

                        }

                        <li className="nav-item">
                            <Link className="nav-link" to='/OrderHistory'>Historial de Compras</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"
                                  to={{pathname: '/SearchProduct'}}>Buscar Producto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"
                                  to={{pathname: '/SelectionByPrice'}}>Selección por Precio</Link>
                        </li>
                        <a className="navbar-brand" href="#">
                            <Link className="nav-link" to='/Cart'>
                                <img
                                    src="https://previews.123rf.com/images/val2014/val20141603/val2014160300005/54302312-shopping-cart-icon.jpg"
                                    width="30"
                                    height="30" className="d-inline-block align-top" alt="">
                                </img>
                            </Link>
                        </a>

                        <li className="nav-item">
                            <button type="submit" className="btn btn-info btn-block my-4" onClick={logout}>
                                <img
                                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/logout-1570566-1330129.png"
                                    width="30"
                                    height="30" className="d-inline-block align-top" alt="">
                                </img>
                            </button>
                        </li>

                    </ul>
                </div>

            </div>
            <script>

            </script>
        </nav>



    )

}

export default Navbar;
