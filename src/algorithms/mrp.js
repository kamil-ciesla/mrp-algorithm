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

function mrp(ghpProductionArray, ghpLeadTime, scheduledReceipts=0, mrpInStock, mrpLeadTime=3, lotSize=40) {
    console.log('Starting MRP algorithm...');
    
    const grossRequirements = [];
    for(let i = ghpLeadTime; i < ghpProductionArray.length; i++){
        grossRequirements.push(ghpProductionArray[i]);
    }
    const weeksLength = grossRequirements.length
    const projectedEndingInventory = [];
    let netRequirements = []
    let plannedOrderReleases = []
    let plannedOrderReceipts = []
    for (let week = 0; week < weeksLength; week++) {
        netRequirements.push(0)
        plannedOrderReleases.push(0)
        plannedOrderReceipts.push(0)
    }

	projectedEndingInventory.push(mrpInStock - grossRequirements[0] + scheduledReceipts[0]);
	for(let week = 1; week < weeksLength; week++) {
        let projectedEndingInventoryValue = projectedEndingInventory[week-1] - grossRequirements[week] + scheduledReceipts[week]
        if (projectedEndingInventoryValue < 0  && week - mrpLeadTime >= 0) {
            netRequirements[week] = -projectedEndingInventoryValue
            plannedOrderReleases[week - mrpLeadTime] = lotSize
            plannedOrderReceipts[week] = lotSize
            projectedEndingInventoryValue += lotSize;
        }
        projectedEndingInventory.push(projectedEndingInventoryValue);
	}
	return {
        "grossRequirements": grossRequirements,
        "projectedEndingInventory": projectedEndingInventory,
        "netRequirements": netRequirements,
        "plannedOrderReleases": plannedOrderReleases,
        "plannedOrderReceipts": plannedOrderReceipts
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