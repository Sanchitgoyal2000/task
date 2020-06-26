import React,{Component} from 'react'
  
const initialState = {
    name: "",
    email: "",
    password: "",
    contact: "",
    nameError: "",
    emailError: "",
    passwordError: "",
    contactError: ""
  };
  
class Profile extends Component{

    
    constructor(){
        super();
        this.state={
            name: "",
            email: "",
            password: "",
            contact: "",
            nameError: "",
            emailError: "",
            passwordError: "",
            contactError: ""
        }
    }


    handleChange = event => {
    this.setState({
        name:event.target.value,
    })
  };

  handleChange1 = event => {
    this.setState({
        email:event.target.value,
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

    if(this.state.password.length<6)
      passwordError = "Password Length should be more than 6";

    if(this.state.contact.length<10||this.state.contact.length>10)
       contactError = "Invalid Contact Number";

    if(Number.isInteger)
       contactError = "Should Be Number";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))
    {
      emailError = "Not Valid Email Format";
    }

    if (emailError || nameError) {
      this.setState({ emailError, nameError ,contactError,passwordError});
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
          email:this.state.email,
          password:this.state.password,
          contact:this.state.contact
      }
      fetch('http://localhost:3000/profile',
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
      this.setState(initialState);
    }
  };

  
  render() {
    return (
        <div>
      
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
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
            onChange={this.handleChange1}
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
        <button type="submit">submit</button>
      </form>
      </div>
    );
}}
export default Profile; 