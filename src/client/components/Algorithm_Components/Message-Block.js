import React from "react";
import "./Message-Block.css";

const GENERATED = "Random element-list generated";
const CREATED = "Enter elements seperated by commas";
const EXCESS_SIZE = "Array size limited from 1 to 20";
const EXCESS_VALUE = "Element value limited from 1 to 50";
const EXCESS_BOTH = "Array size: [1,20] & Element value: [1,50]";
const ASCENDING = "Sorting order: Ascending";
const DESCENDING = "Sorting order: Descending";
const STARTED = "Running Simulation";
const COMPLETED = "Simulation Complete";

let MESSAGE_BOX;
let MESSAGE;

class MessageBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
    this.emphasizeMessage = this.emphasizeMessage.bind(this);
  }

  componentDidMount() {
    MESSAGE_BOX = document.getElementById("messageBox");
    MESSAGE = document.getElementById("message");

    this.setState({
      display: true,
    });
  }

  emphasizeMessage(oldMessage) {
    if (
      oldMessage !== MESSAGE.textContent ||
      oldMessage === EXCESS_VALUE ||
      oldMessage === EXCESS_SIZE ||
      oldMessage === EXCESS_BOTH ||
      oldMessage === GENERATED
    ) {
      MESSAGE.style.opacity = "0";
      MESSAGE_BOX.style.borderLeftColor = "#ae6bff";
      MESSAGE_BOX.style.borderRightColor = "#ae6bff";

      setTimeout(() => {
        MESSAGE.textContent = oldMessage;
        if (oldMessage !== STARTED) {
          MESSAGE_BOX.style.borderLeftColor = "#121212";
          MESSAGE_BOX.style.borderRightColor = "#121212";
        }
        MESSAGE.style.opacity = "1";
      }, 500);
    }
  }

  selectMessage() {
    if (
      !this.props.excessSize &&
      !this.props.excessValue &&
      this.props.completed === ""
    ) {
      if (this.props.sortingOrder === "Ascending") {
        this.emphasizeMessage(ASCENDING);
      } else if (this.props.sortingOrder === "Descending") {
        this.emphasizeMessage(DESCENDING);
      }
    }

    if (
      this.props.created &&
      !this.props.excessSize &&
      !this.props.excessValue &&
      this.props.sortingOrder === "" &&
      this.props.completed === ""
    ) {
      this.emphasizeMessage(CREATED);
    }

    if (
      this.props.generated &&
      !this.props.created &&
      !this.props.excessSize &&
      !this.props.excessValue &&
      this.props.sortingOrder === "" &&
      this.props.completed === ""
    ) {
      this.emphasizeMessage(GENERATED);
    }

    if (
      this.props.created &&
      this.props.sortingOrder === "" &&
      this.props.completed === ""
    ) {
      if (this.props.excessSize && !this.props.excessValue) {
        this.emphasizeMessage(EXCESS_SIZE);
      }
      if (!this.props.excessSize && this.props.excessValue) {
        this.emphasizeMessage(EXCESS_VALUE);
      }
      if (this.props.excessSize && this.props.excessValue) {
        this.emphasizeMessage(EXCESS_BOTH);
      }
    }

    if (
      !this.props.generated &&
      !this.props.excessSize &&
      !this.props.excessValue &&
      this.props.sortingOrder === "" &&
      this.props.started &&
      this.props.completed === ""
    ) {
      this.emphasizeMessage(STARTED);
    }

    if (
      !this.props.generated &&
      !this.props.excessSize &&
      !this.props.excessValue &&
      this.props.sortingOrder === "" &&
      !this.props.started &&
      this.props.completed === "Completed"
    ) {
      this.emphasizeMessage(COMPLETED);
    }
  }

  render() {
    return (
      <div id="messageBlock">
        <h4 id="messageHeading">Message Block</h4>
        <div id="messageContainer">
          <div id="messageBox">
            <div id="message"></div>
          </div>
        </div>
        {this.state.display ? this.selectMessage() : null}
      </div>
    );
  }
}

export default MessageBlock;
