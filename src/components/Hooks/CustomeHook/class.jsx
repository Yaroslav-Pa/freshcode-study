import React, { Component } from 'react';

class BlogLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoading: false,
      isError: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    fetch('/posts.json')
      .then((res) => res.json())
      .then((posts) => {
        this.setState({
          posts,
        });
      })
      .catch((err) => {
        this.setState({
          isError: true,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    const { posts, isError, isLoading } = this.state;

    const postList = posts.map((post) => (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
        <button>Learn more</button>
      </article>
    ));

    if(isLoading) {
      return <h1>LOADING ...</h1>
    }

    if(isError) {
      return <h1>ERROR HAPPENED</h1>
    }

    return <div>{postList}</div>;
  }
}

export default BlogLoader;