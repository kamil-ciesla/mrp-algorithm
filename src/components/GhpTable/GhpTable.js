import "./MrpChart.css";
import ghp from "../../algorithms/ghp";

import { useState } from "react";
import { useEffect } from "react";

function GhpTable(props) {
    const [weeks] = useState(props.weeks);
    const [leadTime, setLeadTime] = useState(props.leadTime);
    const [inStock, setInStock] = useState(props.inStock);
    const [available, setAvailable] = useState([]);


    const [projectedDemandArray, setProjectedDemandArray] = useState(props.projectedDemandArray);
    const [productionArray, setProductionArray] = useState(props.productionArray);

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
        setLeadTime(newGhpLeadTime);
    };

    const updateGhpInStock = (event) => {
        setInStock(event.target.value);
    };

    const updateAvailable = (event) => {
        const ghpData = ghp(projectedDemandArray, productionArray, leadTime, inStock);
        setAvailable(ghpData['available']);
        props.handleResults(ghpData);
    };

    useEffect(() => {
        updateAvailable();
    }, [
        leadTime,
        inStock,
        projectedDemandArray,
        productionArray,
    ]);

    return (
        <div className="ghp-table">
            <h3>Tabela GHP</h3>
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
                        {available?.map((item) => (
                            <td>{item}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className="disabled">Czas realizacji</th>
                        <td>
                            <input
                                type="number"
                                id=""
                                onChange={event => { setLeadTime(event.target.value) }}
                                value={String(leadTime)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th className="disabled">Na stanie</th>
                        <td>
                            <input
                                type="number"
                                id=""
                                onChange={event => { setInStock(event.target.value) }}
                                value={String(inStock)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default GhpTable;
