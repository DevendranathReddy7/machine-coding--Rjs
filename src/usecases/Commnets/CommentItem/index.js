import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = ({cmnt, likeHandler, dislikedHandler, deleteHandle}) => {
  const likedContainer = id => {
    likeHandler(id)
  }
  const dislikedContainer = id => {
    dislikedHandler(id)
  }
  const deleteHandler = id => {
    deleteHandle(id)
  }

  const timeAgo = formatDistanceToNow(new Date(cmnt.timestamp), {
    addSuffix: true,
  })

  return (
    <div className="cmnt__container" key={cmnt.id}>
      <div className="cmnt__heading">
        <button className="cmnt__img amber">
          {cmnt.username[0].toUpperCase()}
        </button>
        <h3>{cmnt.username}</h3>
        <p>{timeAgo}</p>
      </div>
      <p>{cmnt.description}</p>

      <div className="action__container">
        <div className="liked__container">
          {!cmnt.liked ? (
            <button onClick={() => likedContainer(cmnt.id)}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
                alt="like"
              />{' '}
              Like
            </button>
          ) : (
            <button onClick={() => dislikedContainer(cmnt.id)}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
                alt="like"
              />
              Like
            </button>
          )}
        </div>
        <button data-testid="delete" onClick={() => deleteHandler(cmnt.id)}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </div>
  )
}

export default CommentItem
