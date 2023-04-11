import "./MrpChart.css";
import ghp from "../../algorithms/ghp";

import { useState } from "react";
import { useEffect } from "react";

function GhpTable({ handleGhpResults }) {
    const [ghpInStock, setGhpInStock] = useState(2);
    const [ghpLeadTime, setGhpLeadTime] = useState(1);
    const [available, setAvailable] = useState([]);

    const [ghpWeeksAmount, setGhpWeeksAmount] = useState(7);

    const [projectedDemandArray, setProjectedDemandArray] = useState([
        0, 0, 0, 0, 20, 0, 40,
    ]);
    const [productionArray, setProductionArray] = useState([
        0, 0, 0, 0, 28, 0, 30,
    ]);

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
        const newGhpLeadTime = Number(event.target.value);
        setGhpLeadTime(newGhpLeadTime);
    };

    const updateGhpInStock = (event) => {
        setGhpInStock(event.target.value);
        const available = ghp(projectedDemandArray, productionArray, ghpInStock);
        setAvailable(available);
    };

    const updateGhpTable = (event) => {
        const ghpResults = ghp(projectedDemandArray, productionArray, ghpLeadTime, ghpInStock);
        setAvailable(ghpResults['available']);
        handleGhpResults(ghpResults);
    };

    useEffect(() => {
        updateGhpTable();
    }, [
        ghpLeadTime,
        ghpInStock,
        projectedDemandArray,
        productionArray,
    ]);

    return (
        <div className="ghp-table">
            <h3>Tabela GHP</h3>
            <table className="table GeneratedTable">
                <thead>
                    <tr className="disabled">
                        <th>Tydzień</th>
                        {Array.from({ length: ghpWeeksAmount }, (_, i) => i + 1).map(
                            (item) => (
                                <td>{item}</td>
                            )
                        )}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="disabled">Przewidywany popyt</th>
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
                        <th className="disabled">Produkcja</th>
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
                        <th className="disabled">Dostępne</th>
                        {available.map((item) => (
                            <td>{item}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className="disabled">Czas realizacji</th>
                        <td>
                            <input
                                type="number"
                                id=""
                                onChange={updateGhpLeadTime}
                                value={String(ghpLeadTime)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th className="disabled">Na stanie</th>
                        <td>
                            <input
                                type="number"
                                id=""
                                onChange={updateGhpInStock}
                                value={String(ghpInStock)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default GhpTable;
