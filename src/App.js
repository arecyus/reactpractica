import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
class App extends Component {
state = {
  persons: [
    {name:"Matias",age:29},
    {name:"Julian",age:25},
    {name:"Ramiro",age:26}
  ]
}

switchNameHandler = (newName)=> {
    this.setState({persons:[
      {name:newName,age:29},
      {name:"Julian",age:25},
      {name:"Ram",age:26}
    ]})
}

nameChangedHandler = (event)=>{
    this.setState({persons:[
    {name:"Matias",age:29},
    {name:event.target.value,age:25},
    {name:"Ram",age:26}
  ]})
}
  render() {
    return (
      <div className="App">
        <h1>hola</h1>
        <button onClick={(event)=>this.switchNameHandler("Mat")}>Cambiar nombre </button>
        <Person 
           name={this.state.persons[0].name} age={this.state.persons[0].age}
           click={this.switchNameHandler.bind(this, "Mat!")}/>
        <Person 
         name={this.state.persons[1].name}age={this.state.persons[1].age} changed={this.nameChangedHandler}> Y tengo un hobbie de: carreras </Person>
        <Person 
          name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
