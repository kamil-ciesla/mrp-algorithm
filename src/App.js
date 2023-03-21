import './App.css';
import GHPTable from './components/ghp_table/GHPTable';
import MRPTable from './components/mrp_table/MRPTable';



function App() {
  return (
    <div className="App">
      <div className="level-container level-1">
        <h2>
          Poziom 1
        </h2>
        <h3>
          Tabela GHP
        </h3>
        <GHPTable></GHPTable>
        <h3>
          Tabela MRP
        </h3>
        <MRPTable></MRPTable>
      </div>
      <div className="level-container level-2">
        <h2>
          Poziom 2
        </h2>
        <h3>
          Tabela GHP
        </h3>
        <GHPTable></GHPTable>
        <h3>
          Tabela MRP
        </h3>
        <MRPTable></MRPTable>
      </div>
      <div className="level-container level-3">
        <h2>
          Poziom 3
        </h2>
        <h3>
          Tabela GHP
        </h3>
        <GHPTable></GHPTable>
        <h3>
          Tabela MRP
        </h3>
        <MRPTable></MRPTable>
      </div>
    </div>
  );
}

export default App;
