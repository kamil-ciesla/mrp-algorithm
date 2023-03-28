import "./App.css";
import MrpChart from "./components/MrpChart/MrpChart";

function App() {
  return (
    <div className="App">
      <div className="mrp-container card">
        <div className="level-container level-1">
          <h2>Poziom 1</h2>
          <MrpChart></MrpChart>
        </div>
      </div>
    </div>
  );
}

export default App;
