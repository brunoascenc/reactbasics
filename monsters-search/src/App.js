import React, { Component } from "react";

import "./App.css";
import { CardList } from "./components/card-list/CardList";
import { SearchBox } from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  filterRobots = monsters => {
    return smonsters.filter((monster) =>
      monster.name.toLowerCase().includes(this.props.searchField.toLowerCase())
    );
  }

  render() {
    const { monsters } = this.state;

    // const filteredMonsters = monsters.filter((monster) =>
    //   monster.name.toLowerCase().includes(searchField.toLowerCase())
    // );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={this.filterRobots(monsters)} />
      </div>
    );
  }
}
export default App;
