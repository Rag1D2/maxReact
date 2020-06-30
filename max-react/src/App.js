import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Matt", age: 35 },
      { name: "Michael", age: 23 },
      { name: "Lee", age: 38 },
    ],
  };

  switchNameHandler = (newName, newAge) => {
    // console.log("Was CLicked!");
    // DON'T DO THIS: this.state.persons[0].name = "Maximillian";
    this.setState({
      persons: [
        { name: newName, age: 35 },
        { name: "Michael", age: newAge },
        { name: "Lee", age: 38 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 35 },
        { name: "Michael", age: 23 },
        { name: "Lee", age: 38 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={this.switchNameHandler.bind(this, "Matthew!!", 36)}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Matt!", 39)}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Hi, I'm a React App!!!"));
  }
}

export default App;
