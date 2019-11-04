// eslint-disable-next-line
import React, {Component} from 'react';
import Imagen from "./Imagen";

//this shows a card with every product
class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    onclick = () => {

        //alert(this.props.product.id);
        this.props.goToAddProduct(this.props.product);
//        alert("Hola Estoy aca")
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo01"
                            aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">


                    </div>

                </nav>
            </div>
        );
    }

}

export default Navbar;

/*



 */