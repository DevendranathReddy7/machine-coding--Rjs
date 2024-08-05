// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, highScore, gameOver, won} = props
  return (
    <div className="emoji__navbar">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji__logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {!won && !gameOver && (
        <div className="inner_emoji_nav">
          <p>Score: {score || 0}</p>
          <p>Top Score: {highScore || 0}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
