import './ParametersForm.css';

function ParametersForm() {
    return (
        <div class="ParametersForm">
            <div class="">
                <h3>Parametry GHP</h3>
            </div>
            <div class="form-parameter">
                <label htmlFor="">Czas realizacji</label>
                <input type="number" name="" id="" />
            </div>
            <div class="form-parameter">
                <label htmlFor="">Na stanie</label>
                <input type="number" name="" id="" />
            </div>
            <div class="">
                <h3>Parametry MRP</h3>
            </div>
            <div class="form-parameter">
                <label htmlFor="">Czas realizacji</label>
                <input type="number" name="" id="" />
            </div>
            <div class="form-parameter">
                <label htmlFor="">Wielkość partii</label>
                <input type="number" name="" id="" />
            </div>
            <div class="form-parameter">
                <label htmlFor="">Na stanie</label>
                <input type="number" name="" id="" />
            </div>
            <div class="">
                <button type="button">Uruchom algorytm</button>
            </div>
        </div>
    )
}

export default ParametersForm;