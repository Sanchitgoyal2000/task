import React,{Component} from 'react';
import withPower from './withPower'


class Home extends Component{
  render(){
      return(
          <div>
              <h1>Helloooohhhhhhhhhhhhhhh</h1>
          </div>
      )
  }
}

export default withPower(Home);