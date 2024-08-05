// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, onClickHandle} = props

  const emojiClick = id => {
    onClickHandle(id)
  }
  return (
    <button
      data-testid=""
      onClick={() => emojiClick(emoji.id)}
      className="emoji__card_item"
    >
      <img src={emoji.emojiUrl} alt={emoji.emojiName} />
    </button>
  )
}

export default EmojiCard
