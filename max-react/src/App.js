import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Matt', age: 35 },
      { name: 'Michael', age: 23 },
      { name: 'Lee', age: 38 },
    ],
    showPersons: false,
  };

  switchNameHandler = (newName, newAge) => {
    // console.log("Was Clicked!");
    this.setState({
      persons: [
        { name: newName, age: 35 },
        { name: 'Michael', age: newAge },
        { name: 'Lee', age: 38 },
      ],
    });
  };

  nameChangedhandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 35 },
        { name: 'Michael', age: 23 },
        { name: 'Lee', age: 38 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius: '35%',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className='App'>
        <h1>Hi, I am a React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              changed={this.nameChangedhandler}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Mattias!', 55)}
            >
              My Hobbies: Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
      </div>
    );
    // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Hi, I'm a React App!!!"));
  }
}

export default App;
