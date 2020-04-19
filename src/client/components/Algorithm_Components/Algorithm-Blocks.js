import React from "react";
import VisualizationBlock from "./Visualization-Block.js";
import MessageBlock from "./Message-Block.js";
import HighlightBlock from "./Highlight-Block.js";
import KeyBlock from "./Key-Block.js";
import ButtonBlock from "./Button-Block.js";
import DescriptionBlock from "./Description-Block.js";
import "./Algorithm-Blocks.css";

let DYNAMIC_DIV;

class Algorithm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      generated: true,
      randomArray: this.generateRandomArray(),
      created: false,
      resetCreate: false,
      elementInput: [],
      excessSize: false,
      excessValue: false,
      sortClicked: false,
      sortingOrderBool: true,
      sortingOrder: "",
      started: false,
      enableStart: true,
      running: false,
      completed: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.endSimulation = this.endSimulation.bind(this);
  }

  componentDidMount() {
    DYNAMIC_DIV = document.getElementById("dynamic");
  }

  handleClick() {
    if (event.target.name === "GenerateRandomElements") {
      this.setState({
        generated: true,
        randomArray: this.generateRandomArray(),
        sortingOrder: "",
        enableStart: true,
        completed: "",
      });
    } else if (event.target.name === "CreateElementList") {
      this.setState((prevState) => ({
        created: !prevState.created,
        resetCreate: true,
        sortingOrder: "",
        enableStart: true,
        completed: "",
      }));
    } else if (event.target.name === "SortingOrder") {
      this.setState((prevState) => ({
        sortClicked: !prevState.sortClicked,
        sortingOrder: "",
        completed: "",
      }));
    } else if (event.target.name === "Ascending") {
      this.setState({
        sortingOrderBool: true,
        sortingOrder: "Ascending",
        completed: "",
      });
    } else if (event.target.name === "Descending") {
      this.setState({
        sortingOrderBool: false,
        sortingOrder: "Descending",
        completed: "",
      });
    } else if (event.target.name === "Start") {
      this.setState({
        generated: false,
        resetCreate: false,
        sortingOrder: "",
        started: true,
        running: true,
        completed: "",
      });
    } else if (event.target.name === "FullScreen") {
      if (DYNAMIC_DIV.requestFullscreen) {
        DYNAMIC_DIV.requestFullscreen();
      }
      if (document.fullscreen) {
        document.exitFullscreen();
      }
    }
  }

  handleChange() {
    if (event.target.name === "ElementInput") {
      let tempList = event.target.value.split(",");

      for (let i = 0; i < tempList.length; i++) {
        if (tempList[i] === "") tempList.splice(i, 1);
      }

      for (let i = 0; i < tempList.length; i++) {
        tempList[i] = Number(tempList[i]);
      }

      if (tempList.length === 0) {
        this.setState({
          resetCreate: true,
          elementInput: tempList,
          sortingOrder: "",
          enableStart: false,
          completed: "",
        });
      } else {
        this.setState({
          resetCreate: true,
          elementInput: tempList,
          sortingOrder: "",
          enableStart: true,
          completed: "",
        });
      }

      if (tempList.length > 20) {
        this.setState({
          excessSize: true,
          sortingOrder: "",
          enableStart: false,
          completed: "",
        });
      } else {
        this.setState({
          excessSize: false,
          sortingOrder: "",
          completed: "",
        });
      }

      let excessValueBool = false;
      for (let i = 0; i < tempList.length; i++) {
        if (tempList[i] > 50 || tempList[i] <= 0) {
          excessValueBool = true;
        }
      }
      if (excessValueBool) {
        this.setState({
          excessValue: true,
          sortingOrder: "",
          enableStart: false,
          completed: "",
        });
      } else {
        this.setState({
          excessValue: false,
          sortingOrder: "",
          completed: "",
        });
      }
    }
  }

  handleFocus() {
    if (event.target.name === "ElementInput") {
      if (!event.target.value) {
        this.setState({
          resetCreate: true,
          elementInput: [],
          sortingOrder: "",
          enableStart: false,
          completed: "",
        });
      }
    }
  }

  endSimulation() {
    this.setState({
      generated: false,
      resetCreate: false,
      started: false,
      enableStart: false,
      running: false,
      completed: "Completed",
    });
  }

  generateRandomArray() {
    const size = Math.floor(Math.random() * 20) + 1;
    const randomArray = new Array(size);

    for (let i = 0; i < size; i++) {
      randomArray[i] = Math.floor(Math.random() * 50) + 1;
    }

    return randomArray;
  }

  render() {
    return (
      <div id="algorithmBlocks">
        <div id="dynamic">
          <div id="containerBlock">
            <div id="singleContainerBlock">
              <VisualizationBlock
                generated={this.state.generated}
                randomArray={this.state.randomArray}
                created={this.state.created}
                resetCreate={this.state.resetCreate}
                elementInput={this.state.elementInput}
                sortingOrderBool={this.state.sortingOrderBool}
                started={this.state.started}
                enableStart={this.state.enableStart}
                running={this.state.running}
                endSimulation={this.endSimulation}
              />
            </div>
            <div id="triContainerBlock">
              <MessageBlock
                generated={this.state.generated}
                created={this.state.created}
                excessSize={this.state.excessSize}
                excessValue={this.state.excessValue}
                sortingOrder={this.state.sortingOrder}
                started={this.state.started}
                completed={this.state.completed}
              />
              <HighlightBlock
                started={this.state.started}
                sortingOrderBool={this.state.sortingOrderBool}
              />
              <KeyBlock />
            </div>
          </div>
          <ButtonBlock
            generated={this.state.generated}
            created={this.state.created}
            excessSize={this.state.excessSize}
            excessValue={this.state.excessValue}
            sortClicked={this.state.sortClicked}
            sortingOrderBool={this.state.sortingOrderBool}
            enableStart={this.state.enableStart}
            running={this.state.running}
            handleClick={this.handleClick}
            handleChange={this.handleChange}
            handleFocus={this.handleFocus}
          />
        </div>
        <DescriptionBlock />
      </div>
    );
  }
}

export default Algorithm;
