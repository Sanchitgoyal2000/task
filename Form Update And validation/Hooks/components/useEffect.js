import React,{useState,useEffect} from 'react'

function HookeuseEffect() {
    const [count,setCount] = useState(0);

    useEffect(()=> {                                   //called after every render like componentDidMount
         document.title= `You clicked ${count} times`
    })
    return(<div>
        <button onClick={() =>setCount(count+1)}>Click {count} times</button>
    </div>)
}
export default HookeuseEffect;



