const ghpValues = {
    projectedDemand: [],
    production: [],
    available: [],
}

const mrpValues = {
    grossRequirements: [],
    projectedEndingInventory: [],
    netRequirements: [],
    scheduledReceipts: [],
    plannedOrderReleases: [],
    plannedOrdersReceipts: [],
}

function mrp(ghpProductionArray, ghpLeadTime) {
    console.log('Starting MRP algorithm...');
    const grossRequirements = [];
    for(let i = ghpLeadTime; i < ghpProductionArray.length; i++){
        grossRequirements.push(ghpProductionArray[i]);
    }
    return {
        gross_requirements: grossRequirements
    }
    //return grossRequirements;
    //const params = { ghpLeadTime, ghpInStock, mrpLeadTime, lotSize, mrpInStock };
    //console.log("Algorithm_params: " + Object.values(params));

    // //  1. Użyj GHP dla znalezienia potrzeb brutto pozycji z poziomu 0
    // useGhpToFindGrossRequirementForLevel0();

    // //  2. Odejmij zapas, aby otrzymać potrzeby netto pozycji z poziomu 0
    // subtractStockToGetNettoFromLevel0();

    // //  ustal czas rozpoczęcia produkcji, tak aby materiały mogły być dostarczone na czas. 
    // setProductionStartTime();

    // //  3. Jeśli jest więcej poziomów materiałów
    // while (isThereMoreLevels()) {
    //     //  użyj zestawienia materiałów, aby przekształcić potrzeby netto poziomu ostatniego na potrzeby brutto poziomu następnego. 
    //     transformLastNettoToNextBrutto();

    //     //  4. Przyjmij ilość materiałów do poziomu, 
    //     setMaterialsAmountForLevel();

    //     //  a następnie: odejmij zapas na składzie i zaplanowaną dostawę, aby znaleźć wielkość materiałów do zamówienia, 
    //     subtractStockAndPlannedDeliveryToFindMaterialsAmountForOrder();

    //     //  użyj czasu realizacji zamówienia i innych istotnych informacji, aby znaleźć czas zamówienia. 
    //     useProductionTimeAndOtherNeccesaryInformationToFindOrderTime();

    //     //  Wróć do kroku 3. 
    // }

    //Jeśli nie ma już więcej poziomów materiałów, zakończ procedurę.
    return mrpValues;
}



export default mrp