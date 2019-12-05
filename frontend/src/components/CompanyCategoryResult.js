import React, {Component} from 'react';
import CompanyCategoryImage from './CompanyCategoryImage';

class CompanyCategoryResult extends Component {

    constructor(props) {
        super(props);
    }

    mostrarImagenes = () => {

        const companies = this.props.companies;
        if (companies.length === 0) return null;//if there are not products is null

        return (//shows results of Images in the screem
            <React.Fragment>
                <div className="col-12  row">
                    {companies.map(company => (
                        <CompanyCategoryImage
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

export default CompanyCategoryResult;