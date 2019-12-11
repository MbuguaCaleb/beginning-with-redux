import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  //You have to add the new Post to the State
  //life cycle method that adds the new post
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}
//Now defining props after they are maooed below
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  //adding it as a props
  newPost: PropTypes.object
};

//mapping the state from the reducer
const mapStateToProps = state => ({
  posts: state.posts.items,
  //mounting the new added postItem to posts component
  newPost: state.posts.item
});

//function that maps the state to the props//

export default connect(mapStateToProps, { fetchPosts })(Posts);
