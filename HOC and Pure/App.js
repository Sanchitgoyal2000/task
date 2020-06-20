import React , {PureComponent} from 'react';
import Add from './components/operator';
import Home from './components/Home';
import {Switch,BrowserRouter,Route} from 'react-router-dom';


class App extends PureComponent {
  constructor()
  {
      super();
      console.log("hii");
      this.add=this.add.bind(this);
      this.sub=this.sub.bind(this);
      this.state = {
          val:5,
          con:true,
          p:1
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
          val:this.state.val-1,
        }
      )
    }
  }
  
  a()
  {
      this.setState(
          {
              con:false,
              p:333
          }
      )
  }
  render()
  {
    console.log("hii");
      return ( <div>
<Home></Home>
                  {this.state.p}

                   <button onClick = { () => {this.a()}}>+++</button>

                 <input type="text" value={this.state.val}></input>
                
                {this.state.con ?
                
                 <BrowserRouter>

                     <Route  render = { () => <Add add1 = {this.add} sub1 = { this.sub} ></Add>}/>

                 </BrowserRouter>:null}
         </div>
      )
  }
}

export default App;
