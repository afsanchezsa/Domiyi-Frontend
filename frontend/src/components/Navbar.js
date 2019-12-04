import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

            <button type="button" id="sidebarCollapse" className="btn btn-info">
                <i className="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
            </button>
            <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                </ul>
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