/* Component to display the information pertaining to the algorithm */

// Required imports
import React from "react";
import DiagramSection from "./Diagram-Section.js";
import "./Description-Block.css";

class DescriptionBlock extends React.Component {
  render() {
    // JSX that lays out the information and diagram
    return (
      <div id="descriptionBlock">
        <h4 id="descriptionHeading">Description Block</h4>
        <div id="descriptionContainer">
          <div id="definitionContainer">
            <h5 className="heading">Definition</h5>
            <div className="text">
              Bubble-Sort is a comparison-based sorting algorithm which is used
              to sort an array of elements. Sorting takes place by stepping
              through all the elements one-by-one and comparing each element
              with the adjacent element and swapping them if required. It is
              known as bubble sort, because with every complete iteration the
              largest element in the given array, bubbles up towards the last
              place or the highest index, just like a bubble rises to the
              surface of the water.
            </div>
          </div>
          <DiagramSection />
          <div id="algoPseudoContainer">
            <div id="algorithmContainer">
              <h5 className="heading">Algorithm</h5>
              <div className="text">
                <div>bubbleSort(array)</div>
                <div>&#123;</div>
                <div style={{ marginLeft: "30px" }}>let swapped&#59;</div>
                <div style={{ marginLeft: "30px" }}>
                  for (let i = 0&#59; i &lt; array&#46;length&#59; i++)
                </div>
                <div style={{ marginLeft: "30px" }}>&#123;</div>

                <div style={{ marginLeft: "60px" }}> swapped = false&#59;</div>
                <div style={{ marginLeft: "60px" }}>
                  for (let j = 0&#59; j &lt; array&#46;length &#45; i &#45;
                  1&#59; j++)
                </div>
                <div style={{ marginLeft: "60px" }}>&#123;</div>
                <div style={{ marginLeft: "90px" }}>
                  if (array[j] > array[j + 1])
                </div>
                <div style={{ marginLeft: "90px" }}>&#123;</div>
                <div style={{ marginLeft: "120px" }}>
                  let temp = array[j]&#59;
                </div>
                <div style={{ marginLeft: "120px" }}>
                  array[j] = array[j + 1]&#59;
                </div>
                <div style={{ marginLeft: "120px" }}>
                  array[j + 1] = temp&#59;
                </div>
                <div style={{ marginLeft: "120px" }}> swapped = true&#59;</div>
                <div style={{ marginLeft: "90px" }}> &#125;</div>
                <div style={{ marginLeft: "60px" }}> &#125;</div>
                <div style={{ marginLeft: "60px" }}>
                  if (swapped === false) break&#59;
                </div>
                <div style={{ marginLeft: "30px" }}> &#125;</div>

                <div style={{ marginLeft: "30px" }}> return array&#59;</div>
                <div style={{ marginLeft: "0px" }}> &#125;</div>
              </div>
            </div>
            <div id="pseudoCodeContainer">
              <h5 className="heading">Pseudocode</h5>
              <div className="text">
                <div>for (j=0 to indexOfLastElement)</div>
                <div style={{ marginLeft: "30px" }}>swapped = false</div>
                <div style={{ marginLeft: "30px" }}>
                  for (i=0 to indexOfLastUnsortedElement)
                </div>
                <div style={{ marginLeft: "60px" }}>
                  if (leftElement > rightElement)
                </div>
                <div style={{ marginLeft: "90px" }}>
                  <div>swap (leftElement, rightElement) </div>
                  <div>swapped = true</div>
                </div>
                <div style={{ marginLeft: "30px" }}>if swapped = false</div>
                <div style={{ marginLeft: "60px" }}>break;</div>
              </div>
            </div>
          </div>
          <div id="complexityContainer">
            <h5 className="heading">
              Complexity
              <br />
              Analysis
            </h5>
            <div className="text">
              Let n be the number of elements in the list.
              <br />
              In Bubble-Sort, (n-1) comparisons will be done in the 1st pass,
              (n-2) in 2nd pass, (n-3) in 3rd pass and so on.
              <br />
              So, the total number of comparisons will be (n-1) + (n-2) + (n-3)
              + ..... + 3 + 2 + 1<br />
              Therefore,
              <br />
              Sum = <sup>n(n-1)</sup> &frasl; <sub>2</sub>
              <br />
              Complexity = O ( n<sup>2</sup> ) <br />
              <br />
              Thus,
              <br />
              <ul>
                <li>
                  Worst Case Time Complexity [Big-O] = O ( n<sup>2</sup> )
                </li>
                <li>
                  Best Case Time Complexity [Big-omega] = O( n ) &#123;When the
                  list is already sorted&#125;
                </li>
                <li>
                  Average Time Complexity [Big-theta] = O ( n<sup>2</sup> )
                </li>
                <li>
                  Space Complexity = O ( 1 ) &#123;Only a single additional
                  memory space is required i.e. for the temp variable&#125;
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DescriptionBlock;
