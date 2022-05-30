import { useCallback } from "react";
import { atomFamily, useRecoilState } from "recoil";
import { randomColor } from "../Utils";

const squareState = atomFamily({
  key: "square",
  default: { color: "#000000" }
});

const Square = ({ id }) => {
  const [square, setSquare] = useRecoilState(squareState(id));
  return (
    <div
      onClick={useCallback(() => {
        setSquare({ color: randomColor() });
      }, [setSquare])}
      style={{
        backgroundColor: square.color
      }}
      className="square"
    ></div>
  );
};

export default Square;
