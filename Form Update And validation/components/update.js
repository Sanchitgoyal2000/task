import React,{Component}  from 'react'

class Update extends Component{
    constructor(){

        super();

        this.state={
            email:"sanchitgoyal2000@gmail.com",
            obj :{ },
            p:0,
            name: "",
            password: "",
            contact: "",
            nameError: "",
            passwordError: "",
            contactError: ""
        }
    }
    handleChange = event => {
        this.setState({
            name:event.target.value,
        })
      };
    
      handleChange2 = event => {
        this.setState({
            password:event.target.value,
        })
      };
    
      handleChange3 = event => {
        this.setState({
            contact:event.target.value,
        })
      };

      validate = () => {
        let nameError = "";
        let emailError = "";
        let passwordError = "";
        let contactError = "";
    
        if (!this.state.name) {
          nameError = "name cannot be blank";
        }
    
        if (emailError || nameError) {
          this.setState({ emailError, nameError });
          return false;
        }
    
        return true;
      };
    
      handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
          console.log(this.state);
          var data={
              name:this.state.name,
              password:this.state.password,
              contact:this.state.contact
          }
          fetch('http://localhost:3000/profile',
                {
                  method: "PUT",
          
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
      };

    getinfo()
    {
        fetch('http://localhost:3000/profile',
        {
          method: "GET",
  
        } )
  
        .then( res => {
  
              if(res.ok)
                return res.json()
  
          } )
  
        .then( res => {
            
            res.map((e)=>{
                 if(e.email==this.state.email)
                 {
                     this.setState({
                         obj:e,
                         p:1
                     })
                     
                     this.setState({
                         contact:this.state.obj.contact,
                         name:this.state.obj.name,
                         password:this.state.obj.password
                     })
                     console.log(this.state.obj);
                 }

            })
        })
    }

    render(){
        return( <div>
                 <button onClick = {() => {this.getinfo()}}>EDIT PROFILE</button> 
                 {this.state.p==1?<div>
                    <form onSubmit={this.handleSubmit}>
        <div>
          <input  name="name" placeholder="name"  value={this.state.name} onChange={this.handleChange} />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email} 
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange2}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
        <div>
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={this.state.contact}
            onChange={this.handleChange3}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.contactError}
          </div>
        </div>
        <button type="submit">Update Profile</button>
      </form>
                 </div>:<h1>hii</h1>}

            </div>
        )
    }
}
export default Update;