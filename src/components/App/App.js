import { Component } from 'react';
import './App.css';
import Tricks from "../Tricks/Tricks";
import Card from "../Card/Card";
import { getTrickData } from "../../apiCalls";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: []
    }
  }

  componentDidMount() {
    getTrickData()
    .then((data) => this.setState({ tricks: data }))
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Tricks tricks={this.state.tricks} />
      </div>
    )
  }
}

export default App;
