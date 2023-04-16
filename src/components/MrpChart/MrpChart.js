import "./MrpChart.css";
import MrpTable from '../MrpTable/MrpTable'
import GhpTable from '../GhpTable/GhpTable'

import { useState } from "react";
import { useEffect } from "react";

function MrpChart() {
  const [ghpData, setGhpData] = useState(
    {
      ghpLeadTime: 1,
      ghpInStock: 2,
      projectedDemandArray: [0, 0, 0, 0, 20, 0, 40],
      productionArray: [0, 0, 0, 0, 28, 0, 30],
      grossRequirements: [0, 0, 0, 28, 0, 30, 0]
    }
  );
  const [mrpResults, setMrpResults] = useState();

  function handleGhpData(newGhpData) {
    setGhpData(newGhpData);
  }
  return (
    <div className="MrpChart">
      <GhpTable handleGhpData={handleGhpData}></GhpTable>
      <MrpTable ghpData={ghpData} level={1}></MrpTable>
      <MrpTable ghpData={ghpData} level={2}></MrpTable>

    </div>
  )

}

export default MrpChart;
