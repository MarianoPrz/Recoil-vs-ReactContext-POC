import { useContext, useCallback } from "react";
import { Squares } from "./SquareCtxApp";
import { randomColor } from "../Utils";

const SquareCtx = ({ id }) => {
  const { allSquares, setSquare } = useContext(Squares);
  const square = allSquares[id];

  return (
    <div
      className="square"
      onClick={useCallback(() => {
        const newState = [...allSquares];
        newState[id].color = randomColor();
        setSquare(newState);
      }, [allSquares, setSquare, id])}
      style={{
        backgroundColor: square?.color
      }}
    ></div>
  );
};

export default SquareCtx;
