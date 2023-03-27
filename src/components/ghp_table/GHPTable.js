import './GHPTable.css';
import ghp from '../../algorithms/ghp'

import { useState } from 'react';
import { useEffect } from 'react';

function GHPTable() {
    const [projectedDemandArray, setProjectedDemandArray] = useState([0, 0, 0, 0, 20, 0, 40]);
    const [productionArray, setProductionArray] = useState([0, 0, 0, 0, 28, 0, 30]);
    const [inStock, setInStock] = useState(2);

    const [available, setAvailable] = useState([]);

    const updateProjectedDemandArray = (index) => (e) => {
        const newArray = projectedDemandArray.map((item, i) => {
            if (index === i) {
              return Number(e.target.value);
            } else {
              return item;
            }
          });
          console.log(newArray);    
        setProjectedDemandArray(newArray);
    };

    const onInStockChange = event => {
        setInStock(event.target.value);
        const available = ghp(
            projectedDemandArray,
            productionArray,
            inStock
        )
        setAvailable(available);
    };

    useEffect(() => {
        setAvailable(ghp(projectedDemandArray, productionArray, Number(inStock)));
    }, [inStock, projectedDemandArray]);

    return (
        <div className="GHPTable">
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
                                    <input type="number" name="projected" id={index}
                                        value={item}
                                        onChange={updateProjectedDemandArray(index)}
                                    />
                                </td>)
                        }
                    </tr>
                    <tr>
                        <td>Produkcja</td>
                        {
                            productionArray.map((item) =>
                                <td>
                                    <input type="number" name="production" id=""
                                        value={item}
                                    />
                                </td>)}
                    </tr>
                    <tr className='available'>
                        <td>Dostępne</td>
                        {
                            available.map((item) => <td>{item}</td>)
                        }
                    </tr>
                    <tr>
                        <td>Czas realizacji</td>
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <td>Na stanie</td>
                        <td>
                            <input type="number" name="inStock" id=""
                                onChange={onInStockChange}
                                value={inStock}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
}

export default GHPTable;

