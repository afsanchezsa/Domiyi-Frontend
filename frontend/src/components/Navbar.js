import React from 'react'
import {Link} from 'react-router-dom';
// to={{pathname:'/ListProductToEdit',state:{idCompany:this.props.company.id}}}
//to={{pathname:'/CompaniesByCategory',state:{idCategory: 1}}}
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <button type="button" id="sidebarCollapse" className="btn btn-info">
                    <i className="fas fa-align-left"></i>
                    <span>Admin</span>
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
                        <li className="nav-item">
                            <Link className="nav-link" to='/Products'>Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/CompanyRegister'>Registro Compañia</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/UserRegister'>Registro Usuario</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/ProductRegister'>Registro Producto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Orders'>Ordenes Pendientes</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link"
                                  to={{pathname: '/CompaniesByCategory/1', state: {idCategory: 1}}}>Alimentos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"
                                  to={{pathname: '/CompaniesByCategory/2', state: {idCategory: 2}}}>Licores</Link>
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

                    </ul>
                </div>

            </div>
            <script>

            </script>
        </nav>



    )

}
export default Navbar;
