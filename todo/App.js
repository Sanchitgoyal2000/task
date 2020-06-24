import React , {Component} from 'react';
import Todo from './components/todo';
import {Switch,BrowserRouter,Route} from 'react-router-dom';


class App extends Component {
  constructor()
  {
      super(); 
  }


  render()
  {
    return(<div>
      
               <Todo></Todo>
    </div>

    )
  }
}

export default App;
