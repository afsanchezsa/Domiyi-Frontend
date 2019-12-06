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
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        </input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

                    </form>
                </div>

            </div>
        </nav>


    )
}
export default Navbar;


/*

    <nav className="navbar navbar-expand-lg navbar-ligth bg-ligth">
        <div className="cotainer-fluid">


            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand ml-auto" href="#">
                    <img src="https://i.pinimg.com/originals/5b/e5/fb/5be5fbcb55c0d12f61f03fd603c2ddd2.png" width="30"
                         height="30" className="d-inline-block align-top" alt="">

                    </img>
                </a>

                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to='/Login'>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/Products'>Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/CompanyRegister'>Registro Compañia</Link>
                    </li>
                    <li className="nav-item">
                    </li>
                    <Link className="nav-link" to='/UserRegister'>Registro Usuario</Link>
                    <li className="nav-item">
                        <Link className="nav-link" to='/ProductRegister'>Registro Producto</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/Orders'>Ordenes Pendientes</Link>

                    </li>
                </ul>

            </div>

        </div>
    </nav>

*/

/*
    <button type="button" id="sidebarCollapse" className="btn btn-outline-primary">
        <i className="fas fa-align-left"></i>
        <span>Administrar</span>
    </button>


*/