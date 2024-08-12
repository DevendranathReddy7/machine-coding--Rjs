// Write your code here.
import { Component } from "react";
import FaqItem from "../FaqItem";
import "./index.css";

class Faqs extends Component {
  state = { isClicked: [] };

  clickHandler = (id) => {
    this.setState((prev) => ({
      isClicked: prev.isClicked.includes(id)
        ? prev.isClicked.filter((i) => i !== id)
        : [...prev.isClicked, id],
    }));
  };

  render() {
    const { faqsList } = this.props;
    const { isClicked } = this.state;
    return (
      <ul className="faqs__ul">
        <h1>FAQs</h1>
        {faqsList.map((faq) => (
          <li key={faq.id} className="faq__li">
            <FaqItem
              faq={faq}
              onToggole={this.clickHandler}
              isClicked={isClicked}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default Faqs;
