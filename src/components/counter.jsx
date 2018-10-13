import React, { Component } from "react";

class Counter extends Component {
  // includes all of the data that the component needs.
  state = {
    count: 1,
    tags: []
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please add Some Tags!"}
        {this.renderTags()}
      </div>
    );
  }
  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }
}

export default Counter;
