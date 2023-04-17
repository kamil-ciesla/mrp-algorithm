import "./MrpChart.css";
import MrpTable from '../MrpTable/MrpTable'
import GhpTable from '../GhpTable/GhpTable'

import { useState } from "react";
import { useEffect } from "react";

function MrpChart() {
  const [ghpResults, setGhpResults] = useState({});

  function handleGhpResults(newGhpResults) {
    setGhpResults(newGhpResults);
  }

  const [mrpResults, setMrpResults] = useState();

  return (
    <div className="MrpChart">
      <GhpTable
        weeks={7}
        handleResults={handleGhpResults}
        leadTime={1}
        inStock={2}
        projectedDemandArray={[0, 0, 0, 0, 20, 0, 40]}
        productionArray={[0, 0, 0, 0, 28, 0, 30]}
      />
      <h3>Tabele MRP</h3>
      {
        ghpResults.grossRequirements ?
          [
            <MrpTable
              weeks={7}
              grossRequirements={ghpResults.grossRequirements}
              leadTime={3}
              lotSize={40}
              level={1}
              inStock={22}
            />,
            <MrpTable
              weeks={7}
              grossRequirements={[40, 0, 0, 0, 0, 0, 0]}
              leadTime={1}
              lotSize={50}
              level={2}
              inStock={10}
            />
          ]
          :
          <div>Loading mrp..</div>
      }
    </div>
  )

}

export default MrpChart;
