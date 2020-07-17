import React,{Component} from 'react';

class Question extends Component{
    constructor()
    {
        super();
        this.result=this.result.bind(this);
        this.getoption=this.getoption.bind(this);
        this.dec=this.dec.bind(this);
        this.inc=this.inc.bind(this);
        this.state={
             p:0,
             count:0,
             question:['what is Co?','how are u?','what is this?','Your Nmae??'],
             options:[['s','p','d','g'],
                      ['q','r','gg','ded'],
                      ['q','0','gg','ded'],
                      ['p','r','gg','ded'],   ],
             answers:['','','',''],
             actual :['s','q','o','p']
        }
    }
    inc()
    {
        this.setState(
            {
                p:this.state.p+1
            }
        )
    }
    dec()
    {
        if(this.state.p>0)
        {
        this.setState(
            {
                p:this.state.p-1
            }
        )
        }
    }
    getoption(iddd)
    {
        console.log(iddd);
        const temp = this.state.answers;
        console.log(document.getElementById(iddd).value)
        temp[this.state.p]=document.getElementById(iddd).value;
        this.setState(
            {
                answers:temp,
            }
        )
    }
    result()
    {
        console.log(this.state.answers);
       this.state.actual.map((ans,index) =>{
           if(ans==this.state.answers[index])
           {
            this.setState(
                {
                    count:this.state.count+1
                }
            )
            console.log("hello");
           }
       })
       console.log(this.state.count);
    }
    render(){
        console.log('ths is count',this.state.count)
        return(
            <div>
                <h>{this.state.question[this.state.p]}</h>
                {this.state.options[this.state.p].map((opt,index)=>{
                        return<div>
                            <input type="radio" name="result" value={opt} id={index} onClick = {() =>{this.getoption(index)}}></input>
                            <label>{opt}</label>
                            
                        </div>
                })}
                           <button onClick = {() =>{this.dec()}}>PREVIOUS</button>
                            <button onClick = {() =>{this.inc()}}>NEXT</button>
                            <button onClick = {() =>{this.result()}}>SUBMIT</button>
            </div>
        )
    }
}
export default Question;