import React,{useState} from 'react'

//  Hooks allows to use class features without having a class and is in version 16th like with hooks we can use state with functional componet
//  Cant use hooks in classes

function HookCounter() {
    const [count,setCount] = useState(0); // 0 is intial value and setcount is method 
    return(<div>
         <button onClick = {() => setCount(count + 1)}>Count {count} </button>    {/*setcount will take new value always */}
    </div>)
}
export default HookCounter