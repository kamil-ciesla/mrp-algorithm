/*
    in:
    projectedDemand (array),
    production (array)

    out:
    available(array)
*/
function ghp(projectedDemandArray, productionArray, inStock) {
    console.log('Starting GHP algorithm...');
    const params = { projectedDemandArray, productionArray, inStock };
    //console.log("Algorithm_params: " + Object.values(params));

    const available = []
    available.push(inStock)
    for (let i = 1; i < projectedDemandArray.length; i++) {
        available.push(calculateAvailable(available.at(-1), projectedDemandArray[i], productionArray[i]));
    }

    return available;
}

function calculateAvailable(previousAvailable, currentProjectedDemand, currentProduction){
    return previousAvailable - currentProjectedDemand + currentProduction;
}

function useGhpToFindGrossRequirementForLevel0() {

}

function subtractStockToGetNettoFromLevel0() {

}

function setProductionStartTime() {

}

function isThereMoreLevels() {

}

function transformLastNettoToNextBrutto() {

}

function setMaterialsAmountForLevel() {

}

function subtractStockAndPlannedDeliveryToFindMaterialsAmountForOrder() {

}

function useProductionTimeAndOtherNeccesaryInformationToFindOrderTime() {

}

export default ghp