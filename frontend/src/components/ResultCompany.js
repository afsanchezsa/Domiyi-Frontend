import React, {Component} from 'react';
import Imagen from "./Imagen";
import ListCompany from "./ListCompany";
import ImageCompany from "./ImageCompany"
class ResultCompany extends Component{
    constructor(props){
        super(props);
    }
    mostrarImagenes = () => {

        const Companies = this.props.Companies;
        if (Companies.length === 0) return null;

        console.log(Companies);

        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {Companies.map(company => (
                        <ImageCompany
                            key={company.id}
                            company={company}
                        />
                    ))}

                </div>
            </React.Fragment>
        );
    }

    render() {
        return (
            <React.Fragment>
                {this.mostrarImagenes()}
            </React.Fragment>
        );
    }

}

export default ResultCompany;