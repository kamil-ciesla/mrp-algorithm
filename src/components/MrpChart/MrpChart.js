import "./MrpChart.css";
import MrpTable from '../MrpTable/MrpTable'
import GhpTable from '../GhpTable/GhpTable'

import { useState } from "react";
import { useEffect } from "react";

function MrpChart() {
  const [ghpResults, setGhpResults] = useState(
    {
      ghpLeadTime: 1,
      ghpInStock: 2,
      projectedDemandArray: [0, 0, 0, 0, 20, 0, 40],
      productionArray: [0, 0, 0, 0, 28, 0, 30]
    }
  );
  const [mrpResults, setMrpResults] = useState();

  function handleGhpResults(newGhpResults) {
    setGhpResults(newGhpResults);
  }
  return (
    <div className="MrpChart">
      <GhpTable handleGhpResults={handleGhpResults}></GhpTable>
      <MrpTable ghpResults={ghpResults}></MrpTable>
    </div>
  )

}

export default MrpChart;
