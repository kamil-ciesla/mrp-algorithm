import "./MrpChart.css";
import MrpTable from '../MrpTable/MrpTable'
import GhpTable from '../GhpTable/GhpTable'

import { useState } from "react";

function MrpChart() {
  const [ghpResults, setGhpResults] = useState({});

  function handleGhpResults(newGhpResults) {
    setGhpResults(newGhpResults);
  }

  const [firstLevelMrpResults, setFirstLevelMrpResults] = useState();

  return (
    <div className="MrpChart">
      <GhpTable
        weeks={10}
        leadTime={2}
        inStock={5}
        projectedDemandArray={[0, 0, 0, 0, 0, 10, 0, 20]}
        productionArray={[0, 0, 0, 0, 0, 20, 0, 15]}
        handleResults={handleGhpResults}
      />
      <h3>Tabele MRP</h3>
      {
        ghpResults.grossRequirements ?
          [
            <MrpTable
              productName={'Płyta główna'}
              weeks={10}
              grossRequirements={ghpResults.grossRequirements}
              quantityMultiplier={1}
              leadTime={2}
              lotSize={30}
              level={1}
              inStock={10}
              passDataToNextLevel={setFirstLevelMrpResults}
            />,
            firstLevelMrpResults ?
              <MrpTable
                productName={'Karta graficzna'}
                weeks={10}
                grossRequirements={firstLevelMrpResults}
                quantityMultiplier={1}
                leadTime={3}
                lotSize={8}
                level={2}
                inStock={15}
              />
              :
              <div>Loading mrp..</div>,
            <MrpTable
              productName={'Kości pamięci RAM'}
              weeks={10}
              grossRequirements={ghpResults.grossRequirements}
              quantityMultiplier={2}
              leadTime={1}
              lotSize={60}
              level={1}
              inStock={30}
            />
          ]
          :
          <div>Loading mrp..</div>
      }
    </div>
  //   <div className="MrpChart">
  //   <GhpTable
  //     weeks={10}
  //     leadTime={1}
  //     inStock={2}  
  //     projectedDemandArray={[0, 0, 0, 0, 20, 0, 40]}
  //     productionArray={[0, 0, 0, 0, 28, 0, 30]}
  //     handleResults={handleGhpResults}
  //   />
  //   <h3>Tabele MRP</h3>
  //   {
  //     ghpResults.grossRequirements ?
  //       [
  //         <MrpTable
  //           productName={'Blaty'}
  //           weeks={10}
  //           grossRequirements={ghpResults.grossRequirements}
  //           quantityMultiplier={1}
  //           leadTime={3}
  //           lotSize={40}
  //           level={1}
  //           inStock={22}
  //           passDataToNextLevel={setFirstLevelMrpResults}
  //         />,
  //         firstLevelMrpResults ?
  //           <MrpTable
  //             productName={'Płyta pilśniowa'}
  //             weeks={10}
  //             grossRequirements={firstLevelMrpResults}
  //             quantityMultiplier={1}
  //             leadTime={1}
  //             lotSize={50}
  //             level={2}
  //             inStock={10}
  //           />
  //           :
  //           <div>Loading mrp..</div>,
  //         <MrpTable
  //           productName={'Nogi'}
  //           weeks={10}
  //           grossRequirements={ghpResults.grossRequirements}
  //           quantityMultiplier={4}
  //           leadTime={2}
  //           lotSize={120}
  //           level={1}
  //           inStock={40}
  //         />
  //       ]
  //       :
  //       <div>Loading mrp..</div>
  //   }
  // </div>
  )

}

export default MrpChart;
