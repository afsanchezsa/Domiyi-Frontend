import React from 'react'
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Domiyi</h3>
                <h5>Llevando felicidad a los hogares</h5>
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
                    <a href="#">Contáctanos</a>
                </li>
            </ul>
        </nav>

    )
}
export default Sidebar;

