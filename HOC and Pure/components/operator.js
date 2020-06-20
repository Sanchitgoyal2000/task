// import React, {Component} from 'react';

// class Add extends Component {
//     constructor()
//     {
//         super();
//         this.state={
//             pp:0
//         }
//         console.log("hii");
//     }

    
//     shouldComponentUpdate(nextProps, nextState)    // will not repaint the page after updating the state
//     {
//         console.log("Should Update");
//         return true;
//     }
  
//     a()
//     {
//         this.setState(
//             {
//                 pp:1
//             }
//         )
//         console.log(this.state.pp);
//     }   

//     render() {
//         console.log("byy");
//         return (<div>
//             {this.state.pp}
//              <button onClick = { () => {this.a()}}>+++</button>
//             <button onClick = { () => {this.props.add1()}}>+</button>
//             <button onClick = { () => {this.props.sub1()}}>-</button>
//         </div>
//         )
//     }
// }

// export default Add;




import React, {PureComponent} from 'react';

class Add extends PureComponent {
    constructor()
    {
        super();
        this.state={
            pp:0
        }
        console.log("hii");
    }

    componentDidMount()           //after render and only once
    {
      console.log("hello");
    }
    componentWillMount()          //before render and only once
    {
      console.log("hellohhhhhhh");
    }
    
    componentWillUpdate()           //if state or props updated and will run before render
    {
        console.log("Update Will");
    }
    componentDidUpdate()           //if state or props updated and will run before render
    {
        console.log("Update Did");
    }
    componentWillUnmount()                //not working
    {
        console.log("Will Unmount");
    }
    shouldComponentUpdate(nextProps, nextState)    // will not repaint the page after updating the state
    {
        console.log("Should Update");
        return true;
    }
    componentWillReceiveProps(nextProps){
        console.log("props");
    }
    a()
    {
        this.setState(
            {
                pp:1
            }
        )

        console.log(this.state.pp);
    }   

    render() {
        return (<div>
            {this.state.pp}
             <button onClick = { () => {this.a()}}>+++</button>
            <button onClick = { () => {this.props.add1()}}>+</button>
            <button onClick = { () => {this.props.sub1()}}>-</button>
        </div>
        )
    }
}

export default Add;