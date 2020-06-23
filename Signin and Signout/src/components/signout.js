import React , {Component} from 'react';

class Signout extends Component{
    constructor()
    {
        super();
    }
    signout(){
        
        localStorage.setItem('login',JSON.stringify({
            login:false,
        }))
        window.location.replace("http://localhost:3001/authen");
    }
    render()
    {
        return(<div>
            
            <h1> HII OUR ORGANISATIN WELCOMES YOU</h1>

            <button onClick = { () =>{this.signout()}}>Signout</button>
          
        </div> 
        )
    }

}
export default Signout;