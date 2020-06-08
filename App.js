import React , {Component} from 'react';
import Add from './components/operator';

import {Switch,BrowserRouter,Route} from 'react-router-dom';


class App extends Component {
  constructor()
  {
      super();
      this.add=this.add.bind(this);
      this.sub=this.sub.bind(this);
      this.state = {
          val:5
      }
  }
  add()
  {
    this.setState(
      {
        val:this.state.val+1
      }
    )
  }

  sub()
  {
    if(this.state.val>0)
    {
      this.setState(
        {
          val:this.state.val-1
        }
      )
    }
  }


  render()
  {
      return ( <div>

                 <input type="text" value={this.state.val}></input>

                 <BrowserRouter>

                     <Route path= "/add" render = { () => <Add add1 = {this.add} sub1 = { this.sub} ></Add>}/>
                     

                 </BrowserRouter>
         </div>
      )
  }
}

export default App;
