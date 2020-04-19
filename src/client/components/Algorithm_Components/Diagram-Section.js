/* Component that displays the iteration diagram */

// Required imports
import React from "react";
import "./Diagram-Section.css";

class Diagram extends React.Component {
  componentDidMount() {
    let elementBoxes = document.getElementsByClassName("element-box");

    elementBoxes[5].style.borderColor = "#e1e1e1";
    elementBoxes[6].style.borderColor = "#e1e1e1";
    elementBoxes[11].style.borderColor = "#e1e1e1";
    elementBoxes[12].style.borderColor = "#e1e1e1";
    elementBoxes[17].style.borderColor = "#e1e1e1";
    elementBoxes[18].style.borderColor = "#e1e1e1";
    elementBoxes[23].style.borderColor = "#e1e1e1";
    elementBoxes[24].style.borderColor = "#e1e1e1";
    elementBoxes[29].style.borderColor = "#ae6bff";
  }

  // Function to provide sample array for diagram
  prepareSample() {
    let sample = [];
    sample.push([5, 3, 8, 4, 6]);
    sample.push([5, 3, 8, 4, 6]);
    sample.push([3, 5, 8, 4, 6]);
    sample.push([3, 5, 8, 4, 6]);
    sample.push([3, 5, 4, 8, 6]);
    sample.push([3, 5, 4, 6, 8]);

    return sample;
  }

  render() {
    let array = this.prepareSample();
    // JSX that lays out the diagram along with text
    return (
      <div id="diagramSection">
        <h5 className="heading">
          Iteration
          <br />
          Diagram
        </h5>
        <div id="diagramContainer">
          <div id="arrayDiagram">
            <div className="element-container">
              {array[0].map((value, idx) => (
                <div className="element-box" key={idx}>
                  {value}
                </div>
              ))}
            </div>
            <div className="element-container">
              {array[1].map((value, idx) => (
                <div className="element-box" key={idx}>
                  {value}
                </div>
              ))}
            </div>
            <div className="element-container">
              {array[2].map((value, idx) => (
                <div className="element-box" key={idx}>
                  {value}
                </div>
              ))}
            </div>
            <div className="element-container">
              {array[3].map((value, idx) => (
                <div className="element-box" key={idx}>
                  {value}
                </div>
              ))}
            </div>
            <div className="element-container">
              {array[4].map((value, idx) => (
                <div className="element-box" key={idx}>
                  {value}
                </div>
              ))}
            </div>
            <div className="element-container">
              {array[5].map((value, idx) => (
                <div className="element-box" key={idx}>
                  {value}
                </div>
              ))}
            </div>
          </div>
          <div id="labelDiagram">
            <div className="element-container-label">Initial Array</div>
            <div className="element-container-label">
              Comparing 5 &amp; 3 and swapping them to desired order
            </div>
            <div className="element-container-label">
              Comparing 5 &amp; 8 and not swapping them
            </div>
            <div className="element-container-label">
              Comparing 8 &amp; 4 and swapping them to desired order
            </div>
            <div className="element-container-label">
              Comparing 8 &amp; 6 and swapping them to desired order
            </div>
            <div className="element-container-label">
              Largest element has occupied the last position of the considered
              array
            </div>
          </div>
          <div id="explanationDiagram">
            In this first iteration,
            <br />
            <br />
            1.&nbsp;Starting with the first element, we compare the current
            element with the next element of the array. <br />
            <br />
            2.&nbsp;If the current element is greater than the next element of
            the array, we swap them. <br />
            <br />
            3.&nbsp;If the current element is less than the next element, we
            move on to the next element.
          </div>
        </div>
      </div>
    );
  }
}

export default Diagram;
