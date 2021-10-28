import React, { Component } from "react";
import axios from "axios";

class Ax extends Component {
  state = {
    post: [],
  };

  componentDidMount = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => {
        console.log(res.data);
        this.setState({
          post: res.data.slice(0, 10),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <center>
          <h2> Fetch data using API</h2>
          {this.state.post.map((val) => {
            return (
              <div>
                <div>name :{val.name}</div>
                <span>
                  UserName: {val.username}
                </span>
              </div>
            );
          })}
        </center>
      </div>
    );
  }
}
export default Ax;