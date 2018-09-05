import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const friendList = [
  { id: 1, first_name: "Anjanette", last_name: "Comelini" },
  { id: 2, first_name: "Noe", last_name: "Griffithe" },
  { id: 3, first_name: "Crichton", last_name: "Petroulis" },
  { id: 4, first_name: "Rivkah", last_name: "Eastbrook" },
  { id: 5, first_name: "Della", last_name: "Studdert" },
  { id: 6, first_name: "Ferdy", last_name: "Gagen" },
  { id: 7, first_name: "Guillemette", last_name: "Willcott" },
  { id: 8, first_name: "Janna", last_name: "Tirte" },
  { id: 9, first_name: "Reynolds", last_name: "FitzGilbert" },
  { id: 10, first_name: "Pepita", last_name: "Brumwell" }
];

// const fullNames = friendList.map(
//   friend => `${friend.first_name} ${friend.last_name}`
// );

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Freddy",
      friends: friendList
    };
  }
  render() {
    //console.log(fullNames);
    return (
      <div className="App">
        <h1>Hello {this.state.name}</h1>
        <div key={this.state.friends.id}>
          {this.state.friends.map(
            friend => `${friend.first_name} ${friend.last_name}`
          )}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
