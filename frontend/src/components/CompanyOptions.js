import React, {Component} from 'react';
import axios from 'axios'
import ls from 'local-storage'
import Host from '../Utilities/ServerUtilities'
class CompanyOptions extends Component {
   

    render() {
        return (
   <div className="container"  > 
<div className=" text-center offset-sm-0 col-sm-10 offset-md-2 col-md-8 option p-0">
<div>
<img src="https://image.flaticon.com/icons/png/512/26/26393.png" width ='15%' height='15%'></img>
</div>
<div>
    <h3 className="text-white">Editar Productos</h3>
<p className="text-white">Agrega Edita o Añade Productos a tu Compañia</p>

</div>



    
    </div>  
    <div className=" text-center offset-sm-0 col-sm-10 offset-md-2 col-md-8 option p-0">
<div>
<img src="https://image.flaticon.com/icons/png/512/58/58261.png" width ='15%' height='15%'></img>
</div>
<div>
    <h3 className="text-white">Añade Promociones</h3>
<p className="text-white">Promocionar puede ser una buena forma de aumentar tus ventas!</p>

</div>



    
    </div>  
    
    
    
     </div>         

        );
    }
}

export default CompanyOptions;