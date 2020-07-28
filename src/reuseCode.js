import React from "react";

export default function reuseCode(OriginalComponent) {
  class AnotherComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementChange = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementChange={this.incrementChange}
        />
      );
    }
  }
  return AnotherComponent;
}
