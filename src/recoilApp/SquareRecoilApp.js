import { RecoilRoot } from "recoil";
import Square from "./Square";

const SquareRecoilApp = () => {
  return (
    <RecoilRoot>
      <div className="recoil-app">
        <h2> Recoil </h2>
        <div className="square__container">
          {Array.from(Array(9), (_, i) => (
            <Square key={"square-id-" + i} id={"square-id-" + i}></Square>
          ))}
        </div>
      </div>
    </RecoilRoot>
  );
};

export default SquareRecoilApp;
