import React , {Component} from 'react';
import List from './components/List.js';
class App extends Component {
  constructor()
  {
      super(); 
  }


  render()
  {
    return(<div>
      <List></List>
    </div>

    )
  }
}

export default App;
