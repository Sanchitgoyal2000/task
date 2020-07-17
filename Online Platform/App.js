import React,{Component} from 'react'
import './App.css'
import Question from './components/AnswerQuestion.js'
class App extends Component {
	constructor()
	{
		super(); 
	}
  
  
	render()
	{
	  return(<div>
		<Question></Question>
	  </div>
  
	  )
	}
  }
  
  export default App;
  