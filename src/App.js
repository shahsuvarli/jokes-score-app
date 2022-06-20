import "./App.css";
import { Component } from "react";
import JokesContainer from "./JokesContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="left-column"></div>
          <JokesContainer />
        </div>
      </div>
    );
  }
}

export default App;
