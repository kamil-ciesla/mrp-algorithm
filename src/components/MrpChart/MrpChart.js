import "./MrpChart.css";
import ghp from "../../algorithms/ghp";
import mrp from "../../algorithms/mrp";

import { useState } from "react";
import { useEffect } from "react";

function MrpChart() {
  const [projectedDemandArray, setProjectedDemandArray] = useState([
    0, 0, 0, 0, 20, 0, 40,
  ]);
  const [productionArray, setProductionArray] = useState([
    0, 0, 0, 0, 28, 0, 30,
  ]);
  const [ghpInStock, setGhpInStock] = useState(2);
  const [ghpLeadTime, setGhpLeadTime] = useState(1);
  const [available, setAvailable] = useState([]);

  const [grossRequirements, setGrossRequirements] = useState([]);
  const [scheduledReceipts, setscheduledReceipts] = useState([
    0, 0, 0, 0, 0, 0,
  ]);
  const [projectedEndingInventory, setProjectedEndingInventory] = useState([]);
  const [netRequirements, setNetRequirements] = useState([]);
  const [plannedOrderReleases, setPlannedOrderReleases] = useState([]);
  const [plannedOrderReceipts, setPlannedOrderReceipts] = useState([]);
  const [mrpLeadTime, setMrpLeadTime] = useState(3);
  const [lotSize, setLotSize] = useState(40);
  const [mrpInStock, setMrpInStock] = useState(22);

  const updateProjectedDemandArray = (index) => (e) => {
    const newArray = [...projectedDemandArray];
    newArray[index] = e.target.value;
    setProjectedDemandArray(newArray);
  };

  const updateProductionArray = (index) => (e) => {
    const newArray = [...productionArray];
    newArray[index] = e.target.value;
    setProductionArray(newArray);
  };

  const updateGhpLeadTime = (event) => {
    setGhpLeadTime(event.target.value);
  };

  const updateGhpInStock = (event) => {
    setGhpInStock(event.target.value);
    const available = ghp(projectedDemandArray, productionArray, ghpInStock);
    setAvailable(available);
  };

  const updateMrpLeadTime = (event) => {
    setMrpLeadTime(event.target.value);
  };

  const updateLotSize = (event) => {
    setLotSize(event.target.value);
  };

  const updateMrpInStock = (event) => {
    setMrpInStock(event.target.value);
  };

  useEffect(() => {
    setAvailable(ghp(projectedDemandArray, productionArray, ghpInStock));
    setGrossRequirements(
      mrp(productionArray, ghpLeadTime)["grossRequirements"]
    );
    setProjectedEndingInventory(
      mrp(productionArray, ghpLeadTime, scheduledReceipts, mrpInStock)[
        "projectedEndingInventory"
      ]
    );
    setNetRequirements(
      mrp(productionArray, ghpLeadTime, scheduledReceipts, mrpInStock)[
        "netRequirements"
      ]
    );
    setPlannedOrderReleases(
      mrp(productionArray, ghpLeadTime, scheduledReceipts, mrpInStock)[
        "plannedOrderReleases"
      ]
    );
    setPlannedOrderReceipts(
      mrp(productionArray, ghpLeadTime, scheduledReceipts, mrpInStock)[
        "plannedOrderReceipts"
      ]
    );
  }, [ghpLeadTime, ghpInStock, projectedDemandArray, productionArray]);

  return (
    <div className="MrpChart">
      <div className="ghp-table">
        <h3>Tabela GHP</h3>
        <table className="GeneratedTable">
          <thead>
            <tr className="disabled">
              <th>Tydzień</th>
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <td>{item}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="disabled">Przewidywany popyt</td>
              {projectedDemandArray.map((item, index) => (
                <td>
                  <input
                    type="number"
                    name="projected-demand"
                    id={index}
                    value={String(item)}
                    onChange={updateProjectedDemandArray(index)}
                  />
                </td>
              ))}
            </tr>
            <tr>
              <td className="disabled">Produkcja</td>
              {productionArray.map((item, index) => (
                <td>
                  <input
                    type="number"
                    name="production"
                    id={index}
                    value={String(item)}
                    onChange={updateProductionArray(index)}
                  />
                </td>
              ))}
            </tr>
            <tr className="calculated">
              <td className="disabled">Dostępne</td>
              {available.map((item) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr>
              <td className="disabled">Czas realizacji</td>
              <td>
                <input
                  type="number"
                  name="ghpInStock"
                  id=""
                  onChange={updateGhpLeadTime}
                  value={String(ghpLeadTime)}
                />
              </td>
            </tr>
            <tr>
              <td className="disabled">Na stanie</td>
              <td>
                <input
                  type="number"
                  name="ghpInStock"
                  id=""
                  onChange={updateGhpInStock}
                  value={String(ghpInStock)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mrp-table">
        <h3>Tabela MRP</h3>
        <table className="GeneratedTable">
          <thead>
            <tr className="disabled">
              <th>Dane produkcyjne Okres</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
            </tr>
          </thead>
          <tbody>
            <tr className="calculated">
              <td className="disabled">Całkowite zapotrzebowanie</td>
              {grossRequirements.map((item) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr>
              <td className="disabled">Planowane przyjęcia</td>
              {scheduledReceipts.map((item, index) => (
                <td>
                  <input
                    type="number"
                    name="production"
                    id={index}
                    value={String(item)}
                  />
                </td>
              ))}
            </tr>
            <tr className="calculated">
              <td className="disabled">Przewidywane na stanie</td>
              {projectedEndingInventory.map((item) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr className="calculated">
              <td className="disabled">Zapotrzebowanie netto</td>
              {netRequirements.map((item) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr className="calculated">
              <td className="disabled">Planowane zamówienia</td>
              {plannedOrderReleases.map((item) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr className="calculated">
              <td className="disabled">Planowane przyjęcie zamówień</td>
              {plannedOrderReceipts.map((item) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr>
              <td className="disabled">Czas realizacji</td>
              <td>
                <input
                  type="number"
                  name="mrpLeadTime"
                  onChange={updateMrpLeadTime}
                  value={String(mrpLeadTime)}
                />
              </td>
            </tr>
            <tr>
              <td className="disabled">Wielkość partii</td>
              <td>
                <input
                  type="number"
                  name="lotSize"
                  onChange={updateLotSize}
                  value={String(lotSize)}
                />
              </td>
            </tr>
            <tr className="disabled">
              <td>Poziom BOM</td>
              <td>1</td>
            </tr>
            <tr>
              <td className="disabled">Na stanie</td>
              <td>
                <input
                  type="number"
                  name="mrpInStock"
                  onChange={updateMrpInStock}
                  value={String(mrpInStock)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MrpChart;
