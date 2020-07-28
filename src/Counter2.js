import React, { Component } from "react";
import reuseCode from "./reuseCode";

export class counter2 extends Component {
  render() {
      const {count, incrementChange} = this.props
    return (
      <div>
        <p onMouseOver={incrementChange}>
           hovered {count} times
        </p>
      </div>
    );
  }
}

export default reuseCode(counter2);
