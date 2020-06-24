import React , {Component} from 'react';

class List extends Component{
    constructor()
    {
        super();
        this.state={
            items:["Mobiles","Laptops","Household","Eatables","Microwaves"],
            information:[["Samsung","Nokia","Oppo","Vivo","iPhone"],
                          ["Samsung","Lenovo","Dell","Hp","Apple"],
                          ["LED","Clock","Fridge","Table","Chairs"],
                          ["Maggie","Biscuits","Cakes","Chips","Juices"],
                          ["Samsung","IFB","Whirlpool","LG","Onida"],
                                                    ],
            actual:[],
            heading:null
        }
    }
    info(index)
    {
        this.setState({
            actual:this.state.information[index],
            heading:this.state.items[index]
        })  
    }
    render(){
        return (<div>{
            this.state.items.map((e,index) =>{
                return <div>
                      <h3>{index+1}.  {e}    <button onClick={()=>{this.info(index)}}  >> </button> </h3>
                     
                    </div>
            })
            } 
            <h1><center>{this.state.heading}</center></h1>
             {
                  this.state.actual.map((e,index) => {return  <h3>{index+1}. {e}</h3>
                   } )
             }
                      
        </div>
        
        )
    }
}

export default List;