import React, { Component } from 'react';


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  climb() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      /* eslint-disable */
      <div onClick={this.climb.bind(this)}>
        <h1>Count: {this.state.count}</h1>
      </div>
      /* eslint-enable */
    );
  }
}
