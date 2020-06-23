import React , {Component} from 'react';
import Authen from './components/authen';
import Signin from './components/signin';
import Signup from './components/signup';
import Signout from './components/signout';
import {Switch,BrowserRouter,Route} from 'react-router-dom';


class App extends Component {
  constructor()
  {
      super(); 
  }


  render()
  {
    return(<div>
              
               <BrowserRouter>

               <Route path = "/signin" render = { () => <Signin>  </Signin> } />

               <Route path = "/authen" render = { () => <Authen>  </Authen> } />

               <Route path = "/signup" render = { () => <Signup> </Signup> } />

               <Route path = "/signout" render = { () => <Signout> </Signout> } />


               </BrowserRouter>
    </div>

    )
  }
}

export default App;
