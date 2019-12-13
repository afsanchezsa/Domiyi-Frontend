import React, {Component} from 'react';
import axios from 'axios'
import Host from '../Utilities/ServerUtilities'

class Pay extends Component {
    constructor(props){
        super(props);
    }
    state = {
        methods:[],
        id:"",
        paymentMethod: "",
        total: "1000"
    };

    async componentDidMount(){
        const mt = await axios.get(Host+'/paymentMethods');

        this.setState({
            methods: mt.data
        });
    }

    onChangeIdPaymentMethod = (e) => {
        var i;
        var selected=e.target.value;
        for(i=0;i<this.state.methods.length;i++){
            if(this.state.methods[i].paymentMethod===selected){
                this.setState({
                    paymentMethod:this.state.methods[i].id

                });
                break;
            }
        }
    };

    render() {
        return (
            <div className="container p-4 col-md-7 col-sm-10">

                <p>PAGO</p>

                {this.state.methods.map(mt =>
                    <a key={mt.id} value={mt.paymentMethod}
                       href={mt.paymentMethod.replace(/ /g, "")} >{mt.paymentMethod}
                    <p>-----</p>
                    </a>
                )}
            </div>
        );
    }
}

export default Pay;