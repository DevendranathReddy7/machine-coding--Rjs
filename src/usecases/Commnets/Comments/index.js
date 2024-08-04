import { Component } from "react";
import "./index.css";
import CommentItem from "../CommentItem";

class Comments extends Component {
  state = {
    comments: [],
    username: "",
    description: "",
  };

  userNameHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  descripHandler = (e) => {
    this.setState({ description: e.target.value });
  };

  commentHandler = (e) => {
    e.preventDefault();
    const { username, description } = this.state;
    if (username && description) {
      this.setState((prevState) => ({
        comments: [
          ...prevState.comments,
          {
            username,
            description,
            liked: false,
            id: Math.random().toString(36),
            timestamp: new Date(), // Store timestamp
          },
        ],
        username: "",
        description: "",
      }));
    }
  };

  likeHandler = (id) => {
    const { username, description } = this.state;
    this.setState((prevState) => ({
      comments: prevState.comments.map((comment) =>
        comment.id === id ? { ...comment, liked: !comment.liked } : comment
      ),
    }));
  };

  dislikedHandler = (id) => {
    const { username, description } = this.state;
    this.setState((prevState) => ({
      comments: prevState.comments.map((comment) =>
        comment.id === id ? { ...comment, liked: !comment.liked } : comment
      ),
    }));
  };

  deleteHandler = (id) => {
    console.log(id);
    this.setState((prevState) => ({
      comments: prevState.comments.filter((comment) => comment.id !== id),
    }));
  };

  render() {
    const { comments, username, description } = this.state;

    return (
      <div>
        <div className="main__container">
          <form className="left__container">
            <h1>Comments</h1>
            <p>Say something about 4.0</p>
            <input
              type="text"
              placeholder="Your Name"
              value={username}
              onChange={this.userNameHandler}
            />
            <textarea
              rows="10"
              placeholder="Your Comment"
              value={description}
              onChange={this.descripHandler}
            />
            <button onClick={this.commentHandler} id="addCmnt">
              Add Comment
            </button>
          </form>
        </div>
        <hr />
        <div className="no_0f_cmnts">
          <span>
            <button className="cmnt__count">{comments.length}</button>
          </span>
          <p>Comments</p>
        </div>
        <ul>
          {comments.map((comment, index) => (
            <li className="comment__li" key={comment.id}>
              <CommentItem
                cmnt={comment}
                likeHandler={this.likeHandler}
                dislikedHandler={this.dislikedHandler}
                deleteHandle={this.deleteHandler}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Comments;
