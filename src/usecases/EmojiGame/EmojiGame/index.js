import { Component } from "react";
import "./index.css";
import NavBar from "../NavBar";
import EmojiCard from "../EmojiCard";

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    gameOver: false,
    won: false,
    score: 0,
    highScore: 0,
  };

  shuffledEmojisList = () => {
    const { emojisList } = this.props;
    return emojisList.sort(() => Math.random() - 0.5);
  };

  emojiClicked = (id) => {
    const { clickedEmojis } = this.state;
    const { emojisList } = this.props;

    if (clickedEmojis.includes(id)) {
      this.setState({ gameOver: true });
    } else if (clickedEmojis.length + 1 === emojisList.length) {
      this.setState({ won: true, highScore: 12 });
    } else {
      this.setState((prev) => ({
        clickedEmojis: [...prev.clickedEmojis, id],
        score: prev.score + 1,
      }));
    }
    this.shuffledEmojisList();
  };

  playAgain = () => {
    const { clickedEmojis, score, highScore, won, gameOver } = this.state;
    let newHighScore = highScore;
    if (score > highScore) {
      newHighScore = score;
    }
    this.setState({
      clickedEmojis: [],
      highScore: newHighScore,
      score: 0,
      won: false,
      gameOver: false,
    });
  };

  render() {
    const { emojisList } = this.props;
    const { gameOver, won, score, highScore } = this.state;

    return (
      <div className="emoji__main__container">
        <NavBar
          score={score}
          highScore={highScore}
          gameOver={gameOver}
          won={won}
        />
        {!gameOver && !won && (
          <div className="emoji__li">
            {emojisList.map((emoji) => (
              <li key={emoji.id} className="emoji__li">
                <EmojiCard emoji={emoji} onClickHandle={this.emojiClicked} />
              </li>
            ))}
          </div>
        )}

        {gameOver && (
          <div className="emoji__game__status">
            <div className="status__text__container">
              <h1>You Lose</h1>
              <p>Score</p>
              <p>{score}/12</p>
              <button className="playAgain" onClick={this.playAgain}>
                Play Again
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
                alt="win or lose"
                className="emoji_status__img"
              />
            </div>
          </div>
        )}

        {won && (
          <div className="emoji__game__status">
            <div className="status__text__container">
              <h1>You Won</h1>
              <p>Best Score</p>
              <p>12/12</p>
              <button className="playAgain" onClick={this.playAgain}>
                Play Again
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                alt="win or lose"
                className="emoji_status__img"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default EmojiGame;
