import "./styles.css";
import SquareCtxApp from "./ctxApp/SquareCtxApp";
import SquareRecoilApp from "./recoilApp/SquareRecoilApp";

export default function App() {
  return (
    <div className="app">
      <SquareRecoilApp />
      <SquareCtxApp />
    </div>
  );
}
