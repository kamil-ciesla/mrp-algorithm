import './ParametersForm.css';

function ParametersForm() {
    return (
        <div className="ParametersForm">
            <div className="">
                <h3>Parametry GHP</h3>
            </div>
            <div className="form-parameter">
                <label htmlFor="">Czas realizacji</label>
                <input type="number" name="" id="" />
            </div>
            <div className="form-parameter">
                <label htmlFor="">Na stanie</label>
                <input type="number" name="" id="" />
            </div>
            <div className="">
                <h3>Parametry MRP</h3>
            </div>
            <div className="form-parameter">
                <label htmlFor="">Czas realizacji</label>
                <input type="number" name="" id="" />
            </div>
            <div className="form-parameter">
                <label htmlFor="">Wielkość partii</label>
                <input type="number" name="" id="" />
            </div>
            <div className="form-parameter">
                <label htmlFor="">Na stanie</label>
                <input type="number" name="" id="" />
            </div>
            <div className="">
                <button type="button">Uruchom algorytm</button>
            </div>
        </div>
    )
}

export default ParametersForm;