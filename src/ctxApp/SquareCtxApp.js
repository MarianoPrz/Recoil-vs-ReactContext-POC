import { useState, createContext } from "react";
import SquareCtx from "./SquareCtx";

export const Squares = createContext(null);

const SquareCtxApp = () => {
  const [allSquares, setSquare] = useState(
    Array.from(Array(9), (_, i) => ({
      id: i,
      color: "#000000"
    }))
  );

  return (
    <div className="react-context-app">
      <h2> React Context </h2>
      <Squares.Provider value={{ allSquares, setSquare }}>
        <div className="square__container">
          {allSquares?.map((s, i) => (
            <SquareCtx key={s?.id} id={s?.id}></SquareCtx>
          ))}
        </div>
      </Squares.Provider>
    </div>
  );
};

export default SquareCtxApp;
