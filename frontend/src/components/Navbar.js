import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#">
                    <img src="https://i.pinimg.com/originals/5b/e5/fb/5be5fbcb55c0d12f61f03fd603c2ddd2.png" width="30"
                         height="30" className="d-inline-block align-top" alt="">

                    </img>
                </a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
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
                        <Link className="nav-link" to='/Category'>Categoria</Link>

                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    </input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

                </form>
            </div>
        </nav>
    )
}
export default Navbar;