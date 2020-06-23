import React,{Component} from 'react'

class Signin extends Component{
    constructor()
    {
        super();
        this.state={
            login:false,
            store:null,
            email:null,
            password:null
        }
    }
    signin()
    {

        var data={
            user:'',
            password:''
        }
    
        data.user= document.getElementById("1").value;
    
        data.password= document.getElementById("2").value;

        fetch('http://localhost:3000/authenticate',
        {
          method: "GET",
  
        } )
  
        .then( res => {
  
              if(res.ok)
                return res.json()
  
          } )
  
        .then( res => {
            
            res.map((e)=>{
                console.log(res.user);

                if(e.user==data.user&&e.password==data.password)
                {
                   localStorage.setItem('login',JSON.stringify({
                       login:true,
                   }))
                  window.location.replace("http://localhost:3001/signout");
                  console.log("hiii");
                }
            })
      })   

    }
    
    render(){
        return(<div>
            <label>Name</label><br></br>
            <input type="text" id="1"></input><br></br>
            <label>Password</label><br></br>
            <input type="text" id="2"></input><br></br>
            <button onClick = { () =>{this.signin()}}>Signin</button>
        </div>

        )
    }
}
export default Signin;