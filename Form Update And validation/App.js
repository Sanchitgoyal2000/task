import React , {Component} from 'react';
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import Profile from './components/form.js'
import Update from './components/update.js'


class App extends Component {
  constructor()
  {
      super(); 
  }
update()
{
  console.log("ff");
  window.location.replace("http://localhost:3001/update");
}

  render()
  {
    return(<div>
        <button onClick = {() =>{this.update()}}>Update Profile</button>
     <BrowserRouter>
     <Route path = "/update" render={ () => <Update></Update>}/>
     <Route path = "/profile" render={ () => <Profile></Profile>}/>
     </BrowserRouter>
    </div>

    )
  }
}

export default App;