import { useState } from "react";
import { FaX, FaO } from "react-icons/fa6";

const Game = () => {
  const [value, setValue] = useState(Array(9).fill(""));
  const [status, setStatus] = useState("x");
  let end = status === "d" || status.startsWith("w");

  const handleClick = (i) => {
    if (value[i] !== "") return;

    const newValue = [...value];
    newValue[i] = status;
    setValue(newValue);
    if (getWinner(newValue)) {
      setStatus(`w ${getWinner(newValue)}`);
      return;
    } else if (draw(newValue)) {
      setStatus("d");
      return;
    }
    setStatus(status === "x" ? "o" : "x");
  };

  const getWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < squares.length - 1; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return false;
  };

  const draw = (squares) => {
    if (squares.every((item) => item !== "")) {
      return true;
    } else {
      return false;
    }
  };

  const reset = () => {
    setValue(Array(9).fill(""));
    setStatus("x");
  };

  return (
    <div className="center h-screen w-screen flex-col gap-5 bg-yellow-400">
      <ul className="grid grid-cols-3 border ">
        {value.map((value, i) => (
          <li
            key={i}
            className={
              "center h-16 w-16 border bg-white " +
              (value === "" && !end && "hover:bg-gray-50 ")
            }
            onClick={() => !end && handleClick(i)}
          >
            <span className="text-3xl">
              {value !== "" ? value === "x" ? <FaX /> : <FaO /> : null}
            </span>
          </li>
        ))}
      </ul>
      <h1>
        {end
          ? status === "d"
            ? `This is a draw ! Please restart the game`
            : `Winner is ${status[2]} ! Please restart the game`
          : `Next player is ${status}`}
      </h1>
      <button className="button px-10" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

/* 
   if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`This is a draw ! Please restart the game`);
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}. Please restart the game`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    } */

export default Game;
