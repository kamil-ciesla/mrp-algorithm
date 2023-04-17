import "./MrpChart.css";
import mrp from "../../algorithms/mrp";

import { useState } from "react";
import { useEffect } from "react";

function MrpTable(props) {
    // =========================================
    // Parametry MRP
    // Ilość tygodni
    const [weeks] = useState(props.weeks);
    // Czas realizacji
    const [leadTime, setLeadTime] = useState(props.leadTime);
    // Wielkość partii
    const [lotSize, setLotSize] = useState(props.lotSize);
    // Na stanie
    const [inStock, setMrpInStock] = useState(props.inStock);
    // =========================================


    // Planowane przyjęcia
    const [scheduledReceipts, setScheduledReceipts] = useState([
        ...Array(weeks).fill(0),
    ]);
    // Przewidywane na stanie
    const [projectedEndingInventory, setProjectedEndingInventory] = useState([]);
    // Zapotrzebowanie netto
    const [netRequirements, setNetRequirements] = useState([]);
    // Planowane zamówienia
    const [plannedOrderReleases, setPlannedOrderReleases] = useState([]);
    // Planowane przyjęcia zamówień
    const [plannedOrderReceipts, setPlannedOrderReceipts] = useState([]);

    const updateScheduledReceipts = (index) => (e) => {
        const newArray = [...scheduledReceipts];
        newArray[index] = e.target.value;
        setScheduledReceipts(newArray);
    };

    const updateMrpChart = () => {
        const mrpResult = mrp(
            props.grossRequirements,
            scheduledReceipts,
            inStock,
            leadTime,
            lotSize
        );
        setProjectedEndingInventory(mrpResult.projectedEndingInventory);
        setNetRequirements(mrpResult.netRequirements);
        setPlannedOrderReleases(mrpResult.plannedOrderReleases);
        setPlannedOrderReceipts(mrpResult.plannedOrderReceipts);

        if (props.passDataToNextLevel) {
            props.passDataToNextLevel(mrpResult.plannedOrderReleases);
        }
    };

    useEffect(() => { updateMrpChart() }, [
        props.grossRequirements,
        scheduledReceipts,
        leadTime,
        lotSize,
        inStock,
    ]);

    return (
        <div className="mrp-table">
            <h4>Poziom BOM: {props.level}</h4>
            <table className="table GeneratedTable">
                <thead>
                    <tr className="disabled">
                        <th>Dane produkcyjne / Okres</th>
                        {Array.from({ length: weeks }, (_, i) => i + 1).map(
                            (item) => (
                                <td>{item}</td>
                            )
                        )}
                    </tr>
                </thead>
                <tbody>
                    <tr className="calculated">
                        <th className="disabled">Całkowite zapotrzebowanie</th>
                        {props.grossRequirements.map((item) => (
                            <td>{String(item) == '0' ? '' : String(item)}</td>
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
                                    value={String(item) == '0' ? '' : String(item)}
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
                            <td>{String(item) == '0' ? '' : String(item)}   </td>
                        ))}
                    </tr>
                    <tr className="calculated">
                        <th className="disabled">Planowane zamówienia</th>
                        {plannedOrderReleases.map((item) => (
                            <td>{String(item) == '0' ? '' : String(item)}</td>
                        ))}
                    </tr>
                    <tr className="calculated">
                        <th className="disabled">Planowane przyjęcie zamówień</th>
                        {plannedOrderReceipts.map((item) => (
                            <td>{String(item) == '0' ? '' : String(item)}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className="disabled">Czas realizacji</th>
                        <td>
                            <input
                                type="number"
                                name="leadTime"
                                onChange={event => { setLeadTime(event.target.value) }}
                                value={String(leadTime)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th className="disabled">Wielkość partii</th>
                        <td>
                            <input
                                type="number"
                                name="lotSize"
                                onChange={event => { setLotSize(event.target.value) }}
                                value={String(lotSize)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th className="disabled">Na stanie</th>
                        <td>
                            <input
                                type="number"
                                name="inStock"
                                onChange={event => { setMrpInStock(event.target.value) }}
                                value={String(inStock)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MrpTable;
