import React from "react";
import "./Highlight-Block.css";

class HighlightBlock extends React.Component {
  render() {
    return (
      <div id="highlightBlock">
        <h4 id="highlightHeading">Highlight Block</h4>
        <div
          id="highlightContainer"
          className={this.props.started ? "on" : "off"}
        >
          <div className="highlight-line">for (j=0 to indexOfLastElement)</div>
          <div className="highlight-line">swapped = false</div>
          <div className="highlight-line">
            for (i=0 to indexOfLastUnsortedElement)
          </div>
          <div className="highlight-line">
            {this.props.sortingOrderBool
              ? "if (leftElement > rightElement)"
              : "if (leftElement < rightElement)"}
          </div>
          <div className="highlight-line">
            <div>swap (leftElement, rightElement) </div>
            <div>swapped = true</div>
          </div>
          <div className="highlight-line">if swapped = false</div>
          <div className="highlight-line">break</div>
        </div>
      </div>
    );
  }
}

export default HighlightBlock;
