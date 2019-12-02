import React, { Component } from "react";

export class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    //so that you may bind to the state when event change
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    }).then(res => res.json());
  }
  onSubmit(e) {}
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <br />
            <input
              type='text'
              name='title'
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body:</label>
            <br />
            <textarea
              name='body'
              type='text'
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Postform;
