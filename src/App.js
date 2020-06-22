import React, { Component } from 'react';

import classes from './App.css';
import './Person/Person.css'
import Person from './Person/Person';
class App extends Component {
  state = {
  
    persons :[
      {name:"nadeemphmmbvv",age:"30",id:"jjj"},
      {name:"shana",age:"30",id:"jj1"},
      {name:"aman",age:"2",id:"jj2"},
    ],
    isVisible : true

  }

deleteNameHandler = (personIndex) =>{

  const person = [...this.state.persons];
  person.splice(personIndex,1);
  this.setState({persons:person});


}
nameChangedHandler = (event,id) => {

    const personindex = this.state.persons.findIndex(p=>{

     return p.id === id;

    });

    const person = {...this.state.persons[personindex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personindex] = person;
    this.setState({persons:persons});


}

togglePersonHandler = () => {
const changeVal = this.state.isVisible;
  this.setState({isVisible: !changeVal});
}

  
  render() {
  const style= {
        backgroundColor: 'green',
        font:'inherit',
        padding:'8px',
        ':hover':{
          backgroundColor: 'lightgreen'
        }

  }

  let persons = null;
  if(this.state.isVisible){
     persons = (
       this.state.persons.map((person,personIndex) =>{
       return <Person 
       changed={(event)=>this.nameChangedHandler(event,person.id)} name={person.name} 
       click={()=>this.deleteNameHandler(personIndex)}
       key={person.id}
       />
       })
      );
      style[':hover'] = {
          backgroundColor: 'lightgreen'
        }
  }
    return (
      
      <div className={classes.App}>
        <header className={classes.Appheader}>
          
          <h1 className="App-title">Welcome to React-Nadeem</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <button key='b2' style={style} onClick={this.togglePersonHandler}>Toggle</button>
        {persons}
        
        
      </div>
     
    );
  }
}

export default App;
