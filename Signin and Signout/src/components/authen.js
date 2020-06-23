import React , {Component} from 'react';
import Signin from './signin.js'
import {Link} from 'react-router-dom';
class Authen extends Component{
    constructor()
    {
        super();
    }
 
    render()
    {
        return(<div>
        
           <Link to="/signin">Signin</Link>  <br></br>
           <Link to="/signup">Signup</Link>
        </div> 
        )
    }

}
export default Authen;