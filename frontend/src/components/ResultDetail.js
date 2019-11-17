import React, {Component} from 'react';
import ImageDetail from './ImageDetail';

class ResultDetail extends Component {

    constructor(props){
        super(props);
    }
    mostrarImagenes = () => {

        const details = this.props.details;
        if (details.length === 0) return null;//if there are not products is null

        console.log(details);

        return (//shows results of Images in the screem
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {details.map(detail => (
                        <ImageDetail
                            key={detail.id}
                            detail={detail}
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

export default ResultDetail;