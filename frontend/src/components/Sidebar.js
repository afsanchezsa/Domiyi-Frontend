import React from 'react'
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <center>
                        <Link className="nav-link" to={{pathname: '/SearchProduct', state: {idCategory: 1}}}>
                            <h2>DOMIYI</h2></Link>
                <h5>Llevando felicidad a los hogares</h5>
                </center>
            </div>
            <ul className="list-unstyled components">
                <p>Administrador</p>

                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                       className="dropdown-toggle">Compañias</a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li className="nav-item">
                            <Link className="nav-link" to='/CompanyRegister'>Registro Compañia</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to='/MyCompanies'>Mis Compañias</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Orders'>Ordenes Pendientes</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false"
                       className="dropdown-toggle">Productos</a>
                    <ul className="collapse list-unstyled" id="pageSubmenu1">
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
                                  to={{pathname: '/CompaniesByCategory/3', state: {idCategory: 3}}}>Mexicana</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"
                                  to={{pathname: '/CompaniesByCategory/4', state: {idCategory: 4}}}>Farmacia</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Contáctanos</a>
                </li>
            </ul>
        </nav>

    )
}
export default Sidebar;

