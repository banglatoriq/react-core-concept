import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <p>I want to be a react app developer</p>
        <Person name="Rayhan" profession="designer"></Person>
        <Person name="Ibrahim" profession="Developer"></Person>
        <Person name="Arif" profession="Developer"></Person>
        <Person name="Sakib" profession="Banker"></Person>
      </header>
    </div>
  );
}
function Person(props){
  const styleComponent={
    border:'2px solid gold',
    padding:'5px',
    margin:'3px'
  }
  return(
    <div style={styleComponent}>
      <h1>Name: {props.name}</h1>
      <p>Profession: {props.profession}</p>
    </div>
  )
}


export default App;
