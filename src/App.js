import React from "react";
import "./app.css";
import GridRow from "./components/GridRow";
class app extends React.Component {
  constructor() {
    super();
    this.state = {
      boardState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      turn: "X"
    };
  }
  updateBoard = (row, col) => {
    const previousState = this.state.boardState;
    previousState[row][col] = this.state.turn;
    this.setState({
      turn: this.state.turn === "X" ? "0" : "X",
      boardState: previousState
    });
  };
  render() {
    return (
      <>
        <div className="container">
          {[0, 1, 2].map((row) => {
            return (
              <GridRow
                index={row}
                boardState={this.state.boardState}
                updateBoard={this.updateBoard}
              />
            );
          })}
        </div>
      </>
    );
  }
}
export default app;
