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
                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
                       className="dropdown-toggle">Home</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">

                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link className="nav-link" to='/MyCompanies'>Mis Compañias</Link>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                       className="dropdown-toggle">Pages</a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link className="nav-link" to='/ListProductToEdit'>edicion de Productos</Link>
                </li>
                <li>
                    <a href="#">Contáctanos</a>
                </li>
            </ul>
        </nav>

    )
}
export default Sidebar;

