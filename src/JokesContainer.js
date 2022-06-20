import axios from "axios";
import { Component } from "react";

class JokesContainer extends Component {
  constructor() {
    super();
    this.state = {
      jokes: null,
    };
  }
  getJokes() {
    axios
      .get("https://icanhazdadjoke.com/search?limit=10", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((data) => {
        this.setState({ jokes: data.data.results });
      });
  }
  render() {
    return (
      <div className="right-column">
        {this.state.jokes
          ? this.state.jokes.map((item) => {
              return (
                <div className="jokes-table" key={item.id}>
                  <div>efw</div>
                  <div className="joke-container" key={item.id}>
                    {item.joke}
                  </div>
                </div>
              );
            })
          : "Loading..."}
        <button onClick={() => this.getJokes()}>click</button>
      </div>
    );
  }
}
export default JokesContainer;
