import React from "react";
import CreateElementList from "./Create-Element-List.js";
import SortingOrder from "./Sorting-Order.js";
import FullScreen from "../../assets/Full-Screen.png";
import "./Button-Block.css";

class ButtonBlock extends React.Component {
  constructor(props) {
    super(props);
    this.props.handleClick.bind(this);
    this.props.handleChange.bind(this);
    this.props.handleFocus.bind(this);
  }

  render() {
    return (
      <div id="buttonBlock">
        <h4 id="buttonHeading">Button Block</h4>
        <div id="buttonContainer">
          <button
            className="block-button"
            name="GenerateRandomElements"
            onClick={this.props.handleClick}
            disabled={this.props.running}
          >
            Generate Random Elements
          </button>

          <button
            className="block-button"
            name="CreateElementList"
            onClick={this.props.handleClick}
            disabled={this.props.running}
          >
            Create Element List
          </button>

          <CreateElementList
            created={this.props.created}
            running={this.props.running}
            handleChange={this.props.handleChange}
            handleFocus={this.props.handleFocus}
          />

          <button
            className="block-button"
            name="SortingOrder"
            onClick={this.props.handleClick}
            disabled={
              this.props.excessSize ||
              this.props.excessValue ||
              this.props.running
            }
          >
            Sorting Order
          </button>

          <SortingOrder
            sortClicked={this.props.sortClicked}
            sortingOrderBool={this.props.sortingOrderBool}
            handleClick={this.props.handleClick}
          />

          <button
            className="block-button"
            name="Start"
            onClick={this.props.handleClick}
            disabled={this.props.running || !this.props.enableStart}
          >
            Start
          </button>

          <button
            className="block-button"
            name="FullScreen"
            onClick={this.props.handleClick}
          >
            <img
              id="icon"
              name="FullScreen"
              onClick={this.props.handleClick}
              src={FullScreen}
            />
          </button>
        </div>
      </div>
    );
  }
}

export default ButtonBlock;
