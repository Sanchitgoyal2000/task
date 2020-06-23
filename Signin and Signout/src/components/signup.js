import React,{Component} from 'react'

class Signup extends Component{
    constructor()
    {
        super();
        this.state={
            present:0
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event)
    { 
        event.preventDefault();

        var data={
            user:'',
            password:''
        }

        data.user= document.getElementById("2").value;

        console.log(document.getElementById("2").value+"pp");

        data.password= document.getElementById("3").value;

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
            
                if(e.user==data.user)
                {
                    console.log("yes");
                   this.setState({
                       present:1
                   })
                }
            })
      })   

      console.log(this.state.present);

     if(this.state.present==0)
     {
        fetch('http://localhost:3000/authenticate',
            {
              method: "POST",
      
                headers:{"Content-Type":"application/json",  },
      
                  body:JSON.stringify(data),
            } )
      
            .then( res => {

                  if(res.ok)
                    return res.json()
      
              } )
      
            .then( res => {
             
              
              } )
            
    }
    else{
        alert("User Already Registered");
        this.setState(
            {
                present:0
            }
        )
    }
        
    }
    
    render(){
       
        return(<div>
            <form onSubmit={this.handleSubmit}>
            <label>Name</label><br></br>
            <input type="text" id="1"></input><br></br>
            <label>Mail</label><br></br>
            <input type="text" id="2"></input><br></br>
            <label>Password</label><br></br>
            <input type="text" id="3"></input><br></br>
            <button class="btn btn-primary" type="submit">SIGNUP </button>
             </form>
        </div>

        )
    }
}
export default Signup;