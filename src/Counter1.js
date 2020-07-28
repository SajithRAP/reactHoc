import React, { Component } from "react";
import reuseCode from "./reuseCode";

export class counter1 extends Component {
  render() {
    const { count, incrementChange } = this.props;
    return (
      <div>
        <button onClick={incrementChange}>clicked {count} times</button>
      </div>
    );
  }
}

export default reuseCode(counter1);
