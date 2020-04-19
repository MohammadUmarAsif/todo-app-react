import React from "react";
import "./Visualization-Block.css";

let ARRAY_BARS;
let ARRAY_VALUES;
let HIGHLIGHT_LINES;
let MOUNTED = false;

let OUTER_FOR_LOOP;
let SWAP_FALSE;
let INNER_FOR_LOOP;
let COMPARE;
let SWAP;
let IF_SWAP_FALSE;
let BREAK_LOOP;

class VisualizationBlock extends React.Component {
  constructor(props) {
    super(props);

    this.props.endSimulation.bind(this);
  }

  componentDidMount() {
    ARRAY_BARS = document.getElementsByClassName("visualization-array-bar");
    ARRAY_VALUES = document.getElementsByClassName("visualization-array-value");
    HIGHLIGHT_LINES = document.getElementsByClassName("highlight-line");
    MOUNTED = true;

    OUTER_FOR_LOOP = HIGHLIGHT_LINES[0];
    SWAP_FALSE = HIGHLIGHT_LINES[1];
    INNER_FOR_LOOP = HIGHLIGHT_LINES[2];
    COMPARE = HIGHLIGHT_LINES[3];
    SWAP = HIGHLIGHT_LINES[4];
    IF_SWAP_FALSE = HIGHLIGHT_LINES[5];
    BREAK_LOOP = HIGHLIGHT_LINES[6];
  }

  bubbleSort() {
    let array;
    if (this.props.created) {
      array = this.props.elementInput;
    } else {
      array = this.props.randomArray;
    }

    const savedIndexes = [];
    let swapped = false;

    for (let i = 0; i < array.length; i++) {
      swapped = false;
      for (let j = 0; j < array.length - i - 1; j++) {
        savedIndexes.push([j, j + 1, 0]);

        if (this.props.sortingOrderBool) {
          if (array[j] > array[j + 1]) {
            savedIndexes.pop();
            savedIndexes.push([j, j + 1, 1]);
            let tempStorage = array[j];
            array[j] = array[j + 1];
            array[j + 1] = tempStorage;
            swapped = true;
          }
        } else {
          if (array[j] < array[j + 1]) {
            savedIndexes.pop();
            savedIndexes.push([j, j + 1, 1]);
            var tempStorage = array[j];
            array[j] = array[j + 1];
            array[j + 1] = tempStorage;
            swapped = true;
          }
        }
      }
      if (swapped === false) break;
    }

    return [savedIndexes, array];
  }

  visualizeBubbleSort() {
    const [savedIndexes, array] = this.bubbleSort();

    let size = array.length;
    let sum = 0;
    let previousSum = 0;

    for (let i = 0; i < savedIndexes.length + 1; i++) {
      let barOneStyle;
      let barTwoStyle;
      let boxOneStyle;
      let boxTwoStyle;

      if (i < savedIndexes.length) {
        const [barOneIdx, barTwoIdx] = savedIndexes[i];
        barOneStyle = ARRAY_BARS[barOneIdx].style;
        barTwoStyle = ARRAY_BARS[barTwoIdx].style;
        const [boxOneIdx, boxTwoIdx] = savedIndexes[i];
        boxOneStyle = ARRAY_VALUES[boxOneIdx].style;
        boxTwoStyle = ARRAY_VALUES[boxTwoIdx].style;
      }

      setTimeout(() => {
        let count = 0;

        if (i === sum + size - 1) {
          size--;
          previousSum = sum;
          sum = sum + size;

          ARRAY_VALUES[size].style.borderColor = "#ae6bff";
          ARRAY_BARS[size].style.backgroundColor = "#ae6bff";

          IF_SWAP_FALSE.style.borderColor = "#ae6bff";
          SWAP_FALSE.style.borderColor = "#ae6bff";

          for (let j = previousSum; j < i; j++) {
            const [, , ifSwapped] = savedIndexes[j];
            if (ifSwapped === 1) {
              count++;
            }
          }
        }

        if (i < savedIndexes.length) {
          barOneStyle.backgroundColor = "#e1e1e1";
          barTwoStyle.backgroundColor = "#e1e1e1";
          boxOneStyle.borderColor = "#e1e1e1";
          boxTwoStyle.borderColor = "#e1e1e1";

          COMPARE.style.borderColor = "#e1e1e1";

          setTimeout(() => {
            barOneStyle.backgroundColor = barTwoStyle.backgroundColor =
              "#1e1e1e";
            boxOneStyle.borderColor = boxTwoStyle.borderColor = "#1e1e1e";

            COMPARE.style.borderColor = "#121212";

            IF_SWAP_FALSE.style.borderColor = SWAP_FALSE.style.borderColor =
              "#121212";

            if (savedIndexes[i][2] === 1) {
              const [boxOneIdx, boxTwoIdx] = savedIndexes[i];
              const boxOne = ARRAY_VALUES[boxOneIdx];
              const boxTwo = ARRAY_VALUES[boxTwoIdx];

              boxOne.style.color = boxTwo.style.color = "rgba(225,225,255,0)";

              setTimeout(() => {
                const oldOne = barOneStyle.height;
                const oldTwo = barTwoStyle.height;
                barOneStyle.height = oldTwo;
                barTwoStyle.height = oldOne;

                const oldOneValue = boxOne.textContent;
                const oldTwoValue = boxTwo.textContent;
                boxOne.textContent = oldTwoValue;
                boxTwo.textContent = oldOneValue;

                SWAP.style.borderColor = "#e1e1e1";

                setTimeout(() => {
                  boxOne.style.color = boxTwo.style.color =
                    "rgba(225,225,255,1)";
                  SWAP.style.borderColor = "#121212";
                }, 400);
              }, 400);
            }
          }, 400);
        }

        OUTER_FOR_LOOP.style.borderColor = "#ae6bff";
        INNER_FOR_LOOP.style.borderColor = "#ae6bff";

        if (i === savedIndexes.length) {
          for (let g = 0; g < ARRAY_VALUES.length; g++) {
            ARRAY_VALUES[g].style.borderColor = "#ae6bff";
            ARRAY_BARS[g].style.backgroundColor = "#ae6bff";
          }

          this.props.endSimulation();

          SWAP_FALSE.style.borderColor = IF_SWAP_FALSE.style.borderColor =
            "#121212";
          INNER_FOR_LOOP.style.borderColor = OUTER_FOR_LOOP.style.borderColor =
            "#121212";
          if (count === 0) {
            BREAK_LOOP.style.borderColor = "#ae6bff";
          }
        }
      }, i * 1600);
    }
  }

  resetBreakHighlight() {
    if (MOUNTED) {
      HIGHLIGHT_LINES[6].style.borderColor = "#121212";
    }
  }

  resetVisualizedArray() {
    if (MOUNTED) {
      if (this.props.started === false) {
        for (let i = 0; i < ARRAY_BARS.length; i++) {
          ARRAY_BARS[i].style.backgroundColor = "#1e1e1e";
          ARRAY_VALUES[i].style.borderColor = "#1e1e1e";
        }
      }
    }
  }

  render() {
    let array;

    if (this.props.created) {
      array = this.props.elementInput;
    } else {
      array = this.props.randomArray;
    }

    if (this.props.started === false) {
      this.props.generated ? this.resetVisualizedArray() : null;
      this.props.resetCreate ? this.resetVisualizedArray() : null;
    }

    return (
      <div id="visualizationBlock">
        <h4 id="visualizationHeading">Visualization Block</h4>
        <div id="visualizationContainer">
          <div id="array-bar-container">
            {array.map((value, idx) => (
              <div
                className="visualization-array-bar"
                key={idx}
                style={{
                  height: `${value * 2}%`,
                }}
              ></div>
            ))}
          </div>
          <div id="line-divider"></div>
          <div id="array-value-container">
            {array.map((value, idx) => (
              <div className="visualization-array-value" key={idx}>
                {value}
              </div>
            ))}
          </div>
        </div>
        {this.props.enableStart ? this.resetBreakHighlight() : null}
        {this.props.started ? this.visualizeBubbleSort() : null}
      </div>
    );
  }
}

export default VisualizationBlock;
