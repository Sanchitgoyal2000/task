import React,{useState} from 'react'

function HookCounterFour() {
    const [items,setItems] = useState([])
    const addItem = () =>{
        setItems([...items,{                            // ...items means copy the whole array first and then insert the value
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
return ( <div>
        <button onClick = {addItem}>Add item</button>
        <ul>
            {items.map(item =>(
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
    </div>
    )
}

export default HookCounterFour