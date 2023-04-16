import "./MrpChart.css";
import ghp from "../../algorithms/ghp";
import mrp from "../../algorithms/mrp";

import { useState } from "react";
import { useEffect } from "react";

function MrpTable(props) {
    const ghpInStock = props.ghpData.ghpInStock;
    const ghpLeadTime = props.ghpData.ghpLeadTime;

    const projectedDemandArray = props.ghpData.projectedDemandArray;
    const productionArray = props.ghpData.productionArray;

    const [mrpWeeksAmount, setMrpWeeksAmount] = useState(7);

    const [grossRequirements, setGrossRequirements] = useState(props.ghpData.grossRequirements);
    const [scheduledReceipts, setScheduledReceipts] = useState([
        ...Array(mrpWeeksAmount).fill(0),
    ]);
    const [projectedEndingInventory, setProjectedEndingInventory] = useState([]);
    const [netRequirements, setNetRequirements] = useState([]);
    const [plannedOrderReleases, setPlannedOrderReleases] = useState([]);
    const [plannedOrderReceipts, setPlannedOrderReceipts] = useState([]);
    const [mrpLeadTime, setMrpLeadTime] = useState(3);
    const [lotSize, setLotSize] = useState(40);
    const [mrpInStock, setMrpInStock] = useState(22);

    const updateScheduledReceipts = (index) => (e) => {
        const newArray = [...scheduledReceipts];
        newArray[index] = e.target.value;
        setScheduledReceipts(newArray);
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
    const updateMrpChart = (event) => {
        console.log(productionArray)
        const mrpResult = mrp(
            productionArray,
            grossRequirements,
            scheduledReceipts,
            mrpInStock,
            mrpLeadTime,
            lotSize
        );
        setProjectedEndingInventory(mrpResult["projectedEndingInventory"]);
        setNetRequirements(mrpResult["netRequirements"]);
        setPlannedOrderReleases(mrpResult["plannedOrderReleases"]);
        setPlannedOrderReceipts(mrpResult["plannedOrderReceipts"]);
    };

    useEffect(() => {
        updateMrpChart();
    }, [
        ghpLeadTime,
        ghpInStock,
        projectedDemandArray,
        productionArray,
        mrpLeadTime,
        lotSize,
        mrpInStock,
    ]);

    return (
        <div className="mrp-table">
            <h3>Tabela MRP</h3>
            <h4>Poziom BOM: {props.level}</h4>
            <table className="table GeneratedTable">
                <thead>
                    <tr className="disabled">
                        <th>Dane produkcyjne Okres</th>
                        {Array.from({ length: mrpWeeksAmount }, (_, i) => i + 1).map(
                            (item) => (
                                <td>{item}</td>
                            )
                        )}
                    </tr>
                </thead>
                <tbody>
                    <tr className="calculated">
                        <th className="disabled">Całkowite zapotrzebowanie</th>
                        {grossRequirements.map((item) => (
                            <td>{item}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className="disabled">Planowane przyjęcia</th>
                        {scheduledReceipts.map((item, index) => (
                            <td>
                                <input
                                    type="number"
                                    name="production"
                                    id={index}
                                    onChange={updateScheduledReceipts(index)}
                                    value={String(item)}
                                />
                            </td>
                        ))}
                    </tr>
                    <tr className="calculated">
                        <th className="disabled">Przewidywane na stanie</th>
                        {projectedEndingInventory.map((item) => (
                            <td>{item}</td>
                        ))}
                    </tr>
                    <tr className="calculated">
                        <th className="disabled">Zapotrzebowanie netto</th>
                        {netRequirements.map((item) => (
                            <td>{item}</td>
                        ))}
                    </tr>
                    <tr className="calculated">
                        <th className="disabled">Planowane zamówienia</th>
                        {plannedOrderReleases.map((item) => (
                            <td>{item}</td>
                        ))}
                    </tr>
                    <tr className="calculated">
                        <th className="disabled">Planowane przyjęcie zamówień</th>
                        {plannedOrderReceipts.map((item) => (
                            <td>{item}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className="disabled">Czas realizacji</th>
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
                        <th className="disabled">Wielkość partii</th>
                        <td>
                            <input
                                type="number"
                                name="lotSize"
                                onChange={updateLotSize}
                                value={String(lotSize)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th className="disabled">Na stanie</th>
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
    );
}

export default MrpTable;
