import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      largeSquareDimension: 9,
      smallSquareDimension: 3,
      numCols: 0,
      numRows: 0,
      selectedSquare: null,
    };
  }

  componentDidMount() {
    const { largeSquareDimension, smallSquareDimension } = this.state;
    const numCols = largeSquareDimension / smallSquareDimension;
    const numRows = largeSquareDimension / smallSquareDimension;

    this.setState({ numCols, numRows });
  }

  handleSquareClick = (row, col) => {
    this.setState({ selectedSquare: { row, col } });
  };

  render() {
    const { numCols, numRows, selectedSquare } = this.state;
    const smallSquares = [];

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const key = `${row}-${col}`;
        const selected = selectedSquare && row === selectedSquare.row && col === selectedSquare.col;

        smallSquares.push(
          <div
            key={key}
            className={`small-square ${selected ? "selected" : ""}`}
            onClick={() => this.handleSquareClick(row, col)}
          >
            {selected && `(${row}, ${col})`}
          </div>
        );
      }
    }

    return (
      <div className="App">
        <div className="large-square">
          {smallSquares}
        </div>
      </div>
    );
  }
}

export default App;
