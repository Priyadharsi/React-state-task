import React, { Component } from 'react'

export class Homeclass extends Component {
    constructor(){
        super();
        this.state = {
            name:"stateclass",
            age:23,
              mobiles: [{
              id:"001",
              name :"oneplus11",
              price : 56999,
              isPurchased: true},
              {
              id:"002",
              name : "Vivi Y100",
              price : 24999,
              isPurchased: false},
              {
              id:"003",
              name : "Redmi 10",
              price : 56999,
              isPurchased : true},
              {
              id:"004",
              name : "iphone 13",
              price : 62990,
              isPurchased : false},
              {
              id:"005",
              name : "Nokia",
              price : 12000,
              isPurchased : true},
              {
              id:"006",
              name : "Poco M4",
              price : 13999,
              isPurchased : true
            },
            ]
        };
    };
  
    

    sortLTH=()=>{ this.setState(this.state.mobiles.sort((a,b)=>a.price-b.price))};
    //   setName(newdata)}
    sortHTL=()=>{this.setState(this.state.mobiles.sort((a,b)=>b.price-a.price))};
        // setName(newdata1.reverse())}
    filteritems=()=>{this.setState({mobiles:this.state.mobiles.filter((el,i)=>el.isPurchased === true)})};
    //  setName(newdata2)}
    sortbyASC=()=>{const sortnames=[...this.state.mobiles.sort((a,b)=>{
      if (a.name < b.name){
        return -1;
      }
      if (a.name > b.name){
        return 1;
      }
      return 0;
      
    })];
     this.setState(sortnames);
  };
  sortbyDSC=()=>{const sortbynames=[...this.state.mobiles.sort((a,b)=>{
    if (a.name > b.name){
      return -1;
    }
    if (a.name < b.name){
      return 1;
    }
    return 0;
    
  })];
  this.setState(sortbynames);
};
    
render() {  
  return (
    <div>
    {this.state.mobiles.map(
      (n,i)=><div  key={i}><h2>{n.name}</h2><h3>{n.price}</h3></div>)}

    {/* <button onClick={setName}>Click</button> */}
    <button onClick={this.sortLTH}>LTH</button>
    <button onClick={this.sortHTL}>HTL</button>
    <button onClick={this.sortbyASC}>sortbyASC</button>
    <button onClick={this.sortbyDSC}>sortbyDSC</button>
    <button onClick={this.filteritems}>filter</button>
    </div> 
  )
}
};
//     return (
//       <div>Homeclass</div>
//     )
//   }
// }

export default Homeclass;