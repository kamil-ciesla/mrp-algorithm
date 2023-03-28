import './MrpChart.css';
import ghp from '../../algorithms/ghp'
import mrp from '../../algorithms/mrp'

import { useState } from 'react';
import { useEffect } from 'react';

function MrpChart() {
    const [projectedDemandArray, setProjectedDemandArray] = useState([0, 0, 0, 0, 20, 0, 40]);
    const [productionArray, setProductionArray] = useState([0, 0, 0, 0, 28, 0, 30]);
    const [ghpInStock, setGhpInStock] = useState(2);
    const [ghpLeadTime, setGhpLeadTime] = useState(1);
    const [available, setAvailable] = useState([]);

    const [grossRequirements, setGrossRequirements] = useState([]);
    const [mrpLeadTime, setMrpLeadTime] = useState(3);
    const [lotSize, setLotSize] = useState(40);
    const [mrpInStock, setMrpInStock] = useState(22);


    const updateProjectedDemandArray = (index) => (e) => {
        const newArray = [...projectedDemandArray]
        newArray[index] = e.target.value;
        setProjectedDemandArray(newArray);
    };

    const updateProductionArray = (index) => (e) => {
        const newArray = [...productionArray]
        newArray[index] = e.target.value;
        setProductionArray(newArray);
    };

    const onInStockChange = event => {
        setGhpInStock(event.target.value);
        const available = ghp(
            projectedDemandArray,
            productionArray,
            ghpInStock
        )
        setAvailable(available);
    };

    useEffect(() => {
<<<<<<< HEAD
        setAvailable(ghp(projectedDemandArray, productionArray, inStock));
        console.log(ghpLeadTime)
        console.log(productionArray);
        setGrossRequirements(mrp(productionArray,ghpLeadTime, [0, 0, 0, 0, 0, 0])["grossRequirements"])
    }, [inStock, projectedDemandArray, productionArray]);
=======
        setAvailable(ghp(projectedDemandArray, productionArray, ghpInStock));
        setGrossRequirements(mrp(productionArray,ghpLeadTime))
    }, [ghpInStock, projectedDemandArray, productionArray]);
>>>>>>> 10e622edce63b1483baa2eefb0d8ff0dc057ee6f

    return (
        <div className="MrpChart">
            <div className="ghp-table">
                <h3>
                    Tabela GHP
                </h3>
                <table className="GeneratedTable">
                    <thead>
                        <tr>
                            <th>Tydzień</th>
                            {
                                [1, 2, 3, 4, 5, 6, 7].map((item) => <td>{item}</td>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Przewidywany popyt</td>
                            {
                                projectedDemandArray.map((item, index) =>
                                    <td>
                                        <input type="number" name="projected-demand" id={index}
                                            value={String(item)}
                                            onChange={updateProjectedDemandArray(index)}
                                        />
                                    </td>)
                            }
                        </tr>
                        <tr>
                            <td>Produkcja</td>
                            {
                                productionArray.map((item, index) =>
                                    <td>
                                        <input type="number" name="production" id={index}
                                            value={String(item)}
                                            onChange={updateProductionArray(index)}
                                        />
                                    </td>)
                            }
                        </tr>
                        <tr className='available'>
                            <td>Dostępne</td>
                            {
                                available.map((item) => <td>{item}</td>)
                            }
                        </tr>
                        <tr>
                            <td>Czas realizacji</td>
                            <td>
                                <input type="number" name="ghpInStock" id=""
                                    onChange={onInStockChange}
                                    value={String(ghpLeadTime)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Na stanie</td>
                            <td>
                                <input type="number" name="ghpInStock" id=""
                                    onChange={onInStockChange}
                                    value={String(ghpInStock)}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mrp-table">
                <h3>    
                    Tabela MRP
                </h3>
                <table className="GeneratedTable">
                    <thead>
                        <tr>
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
                        <tr>
                            <td>Całkowite zapotrzebowanie</td>
                            {
                                grossRequirements.map((item, index) =>
                                    <td>
                                        <input type="number" name="production" id={index}
                                            value={String(item)}
                                        />
                                    </td>)
                            }
                        </tr>
                        <tr>
                            <td>Planowane przyjęcia</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr>
                            <td>Przewidywane na stanie</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr>
                            <td>Zapotrzebowanie netto</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr>
                            <td>Planowane zamówienia</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr>
                            <td>Planowane przyjęcie zamówień</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr>
                            <td>Czas realizacji</td>
                            <td>
                            <input type="number" name="ghpInStock" id=""
                                    value={String(mrpLeadTime)}
                                />
                            </td>

                        </tr>
                        <tr>
                            <td>Wielkość partii</td>
                            <td>
                            <input type="number" name="ghpInStock" id=""
                                    value={String(lotSize)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Poziom BOM</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Na stanie</td>
                            <td>
                            <input type="number" name="ghpInStock" id=""
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

