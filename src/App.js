import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const nayoks = ['Anwar','Jasim','Sakib','Salman']
 const products = [
   {name:'Photoshop', price:'$90.99'},
   {name:'Illustrator', price:'$60.99'},
   {name:'PDF Reader', price:'$6.99'},
  ]

  return (
     <div className="App">
       <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok=><li>{nayok}</li>)
          }
          {
            products.map(pd=><Product products={pd}></Product>)
          }
        </ul>
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        </header>
      </div>
       
  );
}
function Counter(){
  const [count,setCount]   = useState(0);
 
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onMouseMove={()=>setCount(count+1)}>Increase</button>
      <button onMouseMove={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}
function Users(){
  const[posts,setPost] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => setPost(data))
  })
  return(
    <div>
      <h3>Dynamic Post:{posts.length}</h3>
      
      <div class="row">
      <div class="card">
      <h2>{posts.map(p=>p.title)}</h2>
      <h5>{posts.map(p=>p.id)}, Dec 7, 2017</h5>
      <p>{posts.map(p=>p.body)}</p>
      </div>
      </div>
    </div>
  )
}
function Product(props){
  const productStyle={
          border:'1px solid gray',
          borderRadius:'5px',
          backgroundColor:'lightgray',
          height:'200px',
          width:'200px',
          float:'left',
          
  }
  const {name,price} = props.products;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h6>{price}</h6>
      <button>Buy Now</button>
    </div>
  )
}
// function Person(props){
//   const styleComponent={
//     border:'2px solid gold',
//     padding:'5px',
//     margin:'3px'
//   } 

//   return(
//     <div style={styleComponent}>
//       <h1>Name: {props.products.name}</h1>
//       <p>Profession: {props.products.profession}</p>
     
//     </div>
//   )
// }


export default App;
