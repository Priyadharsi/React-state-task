import React, {useState} from 'react'


const Home = () => {
  const  mobiles = [{
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
    isPurchased : true}]
  
    const [name,setName]=useState(mobiles);

    const newobj=()=>{const newdata=[...name].sort((a,b)=>a.price-b.price);
      setName(newdata)}
    const newobj1=()=>{const newdata1=[...name].sort((a,b)=>a.price-b.price);
        setName(newdata1.reverse())}
    const newobj2=()=>{const newdata2=name.filter((el,i)=>el.isPurchased === true)
     setName(newdata2)}
    const newobj3=()=>{const newdata3=[...name].sort((a,b)=>{
      if (a.name < b.name){
        return -1;
      }
      if (a.name > b.name){
        return 1;
      }
      return 0;
      
    })
    setName(newdata3);
  };
  const newobj4=()=>{const newdata4=[...name].sort((a,b)=>{
    if (a.name > b.name){
      return -1;
    }
    if (a.name < b.name){
      return 1;
    }
    return 0;
    
  })
  setName(newdata4);
};
    
    
  return (
    <div>Home
    {name.map(
      (n,i)=><div  key={i}><h2>{n.name}</h2><h3>{n.price}</h3></div>)}

    {/* <button onClick={setName}>Click</button> */}
    <button onClick={newobj}>LTH</button>
    <button onClick={newobj1}>HTL</button>
    <button onClick={newobj3}>sortbyASC</button>
    <button onClick={newobj4}>sortbyDSC</button>
    <button onClick={newobj2}>filter</button>
    </div> 
  )
}

export default Home