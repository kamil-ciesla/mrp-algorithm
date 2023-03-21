import './ParametersForm.css';
import mrp from '../../mrp_algorithm/mrpAlgorithm'
import { useState } from 'react';

function ParametersForm() {

    const [ghpLeadTime, setGhpLeadTime] = useState(0);
    const onGhpLeadTimeChange = event => {
        setGhpLeadTime(event.target.value);
    };
    const [ghpInStock, setGhpInStock] = useState(0);
    const onGhpInStockChange = event => {
        setGhpInStock(event.target.value);
    };
    const [mrpLeadTime, setMrpLeadTime] = useState(0);
    const onMrpLeadTimeChange = event => {
        setMrpLeadTime(event.target.value);
    };
    const [batchSize, setBatchSize] = useState(0);
    const onBatchSizeChange = event => {
        setBatchSize(event.target.value);
    };
    const [mrpInStock, setMrpInSrock] = useState(0);
    const onMrpInStockChange = event => {
        setMrpInSrock(event.target.value);
    };

    return (
        <div className="ParametersForm">
            <div className="">
                <h3>Parametry GHP</h3>
            </div>
            <div className="form-parameter">
                <label htmlFor="">Czas realizacji</label>
                <input type="number" name="ghpLeadTime" id="" 
                onChange={onGhpLeadTimeChange}
                value={ghpLeadTime}
                />
            </div>
            <div className="form-parameter">
                <label htmlFor="">Na stanie</label>
                <input type="number" name="ghpInStock" id="" 
                onChange={onGhpInStockChange}
                value={ghpInStock}
                />
            </div>
            <div className="">
                <h3>Parametry MRP</h3>
            </div>
            <div className="form-parameter">
                <label htmlFor="">Czas realizacji</label>
                <input type="number" name="mrpLeadTime" id="" 
                onChange={onMrpLeadTimeChange}
                value={mrpLeadTime}
                />
            </div>
            <div className="form-parameter">
                <label htmlFor="">Wielkość partii</label>
                <input type="number" name="batchSize" id="" 
                onChange={onBatchSizeChange}
                value={batchSize}
                />
            </div>
            <div className="form-parameter">
                <label htmlFor="">Na stanie</label>
                <input type="number" name="mrpInStock" id="" 
                onChange={onMrpInStockChange}
                value={mrpInStock}
                />
            </div>
            <div className="">
                <button type="button" onClick={() => { mrp(ghpLeadTime, ghpInStock, mrpLeadTime, batchSize, mrpInStock) }}>Uruchom algorytm</button>
            </div>
        </div>
    )
}

export default ParametersForm;