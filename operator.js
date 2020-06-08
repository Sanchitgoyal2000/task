import React, {Component} from 'react';

class operator extends Component {
    constructor()
    {
        super();
    }


    render() {
        return (<div>
            <button onClick = { () => {this.props.add1()}}>+</button>
            <button onClick = { () => {this.props.sub1()}}>-</button>
        </div>
        )
    }
}
export default operator;