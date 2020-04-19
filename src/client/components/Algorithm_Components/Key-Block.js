import React from "react";
import "./Key-Block.css";

class KeyBlock extends React.Component {
  render() {
    return (
      <div id="keyBlock">
        <h4 id="keyHeading">Key Block</h4>
        <div id="keyContainer">
          <div id="color-container">
            <div
              className="key-color"
              style={{ backgroundColor: "#1e1e1e" }}
            ></div>
            <div
              className="key-color"
              style={{ backgroundColor: "#e1e1e1" }}
            ></div>
            <div
              className="key-color"
              style={{ backgroundColor: "#ae6bff" }}
            ></div>
          </div>
          <div id="label-container">
            <div className="key-label">Unsorted Element</div>
            <div className="key-label">Compared Element</div>
            <div className="key-label">Sorted Element</div>
          </div>
        </div>
      </div>
    );
  }
}

export default KeyBlock;
