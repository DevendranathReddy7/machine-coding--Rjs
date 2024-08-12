import './index.css'

const FaqItem = ({faq, onToggole, isClicked}) => {
  const clickHandler = id => {
    onToggole(id)
  }
  return (
    <div className="faq__item__container">
      <div className="faq__item__question">
        <h3>{faq.questionText}</h3>
        {!isClicked.includes(faq.id) ? (
          <button onClick={() => clickHandler(faq.id)} className="plus__button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              alt="plus"
              className="plus__img"
            />
          </button>
        ) : (
          <button onClick={() => clickHandler(faq.id)} className="plus__button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              alt="minus"
              className="plus__img"
            />
          </button>
        )}
      </div>
      {isClicked.includes(faq.id) && (
        <div>
          <hr />
          <p>{faq.answerText}</p>
        </div>
      )}
    </div>
  )
}

export default FaqItem
