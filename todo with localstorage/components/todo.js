import React,{Component} from 'react'

class Todo extends Component{
    constructor(){
        super();
        this.state={
            items:[]
        }

        var name = localStorage.getItem('arr').split(',');
        this.setState(
            {
                items:name
            }
        )

        setTimeout(() => {
            this.setState({
                items:name
          })
        }, 1000);
        console.log(name);
        console.log(this.state.items);
        this.delete=this.delete.bind(this);
        this.add=this.add.bind(this);
    }


    delete(index){
        const arr=this.state.items;
        var index1=index;
        if(index==0)
        index1=index1+1;
        arr.splice(index,index1);
        this.setState({
            items:arr
        })
        localStorage.setItem('arr', this.state.items);
    }

    add(event)
    {
       
        const arr=this.state.items;
        var p=document.getElementById("t1").value;
        arr.push(p);
        this.setState({
            items:arr
        })
        localStorage.setItem('arr', this.state.items);
    }

    edit(index)
    {
        const arr=this.state.items;
        var p=document.getElementById(index).value;
        arr[index]=p;
        console.log(p);
        this.setState({
            items:arr
        })
        localStorage.setItem('arr', this.state.items);
    }
    render(){
        return( <div> 

            {<input type="text" id="t1"></input>                           /*dont give same ids */}
            <button onClick={(e,index)=>{this.add()}}>Add Item</button>  
            {
                     this.state.items.map((e,index)=>  { return <div> <h1>{e}</h1>
                     <button onClick={()=>{this.delete(index)}}>  DELETE </button>
                      <input type="text" id={index}></input> <button  onClick={()=>{this.edit(index)}}>EDIT</button>
                      </div>

                     })
                 } 
           </div>
        )
    }


}
export default Todo;