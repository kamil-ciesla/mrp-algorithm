import './ParametersForm.css';
import ghp from '../../algorithms/ghp'
import mrp from '../../algorithms/mrp'

import { useState } from 'react';

function ParametersForm() {
    
    
    const [ghpLeadTime, setGhpLeadTime] = useState(0);
    const onGhpLeadTimeChange = event => {
        setGhpLeadTime(event.target.value);
    };
    
    const [mrpLeadTime, setMrpLeadTime] = useState(0);
    const onMrpLeadTimeChange = event => {
        setMrpLeadTime(event.target.value);
    };
    const [lotSize, setLotSize] = useState(0);
    const onLotSizeChange = event => {
        setLotSize(event.target.value);
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
                <input type="number" name="lotSize" id=""
                    onChange={onLotSizeChange}
                    value={lotSize}
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
                <button type="button" onClick={() => {
                    //mrp(ghpLeadTime, ghpInStock, mrpLeadTime, lotSize, mrpInStock)

                }}>Uruchom algorytm</button>
            </div>
        </div>
    )
}

export default ParametersForm;