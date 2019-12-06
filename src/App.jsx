import "./App.css";

import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robos: [],
      textSearch: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(r => r.json())
      .then(res => this.setState({ robos: res }));
  }
  seachRobo = e => {
    this.setState({
      textSearch: e.target.value
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <div className="search-box">
          <input
            className="search"
            type="search"
            placeholder="search here.."
            name="search"
            id="search"
            onChange={this.seachRobo}
          />
        </div>

        <CardList textSearch={this.state.textSearch} robos={this.state.robos} />
      </div>
    );
  }
}

export default App;
