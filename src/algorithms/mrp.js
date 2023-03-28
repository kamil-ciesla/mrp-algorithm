const ghpValues = {
  projectedDemand: [],
  production: [],
  available: [],
};

const mrpValues = {
  grossRequirements: [],
  projectedEndingInventory: [],
  netRequirements: [],
  scheduledReceipts: [],
  plannedOrderReleases: [],
  plannedOrdersReceipts: [],
};

function mrp(
  ghpProductionArray,
  ghpLeadTime,
  scheduledReceipts = 0,
  mrpInStock,
  mrpLeadTime = 3,
  lotSize = 40
) {
  console.log("Starting MRP algorithm...");

  const grossRequirements = [];
  for (let i = ghpLeadTime; i < ghpProductionArray.length; i++) {
    grossRequirements.push(ghpProductionArray[i]);
  }
  const weeksLength = grossRequirements.length;
  const projectedEndingInventory = [];
  let netRequirements = [];
  let plannedOrderReleases = [];
  let plannedOrderReceipts = [];
  for (let week = 0; week < weeksLength; week++) {
    netRequirements.push(0);
    plannedOrderReleases.push(0);
    plannedOrderReceipts.push(0);
  }

  projectedEndingInventory.push(
    mrpInStock - grossRequirements[0] + scheduledReceipts[0]
  );
  for (let week = 1; week < weeksLength; week++) {
    let projectedEndingInventoryValue =
      projectedEndingInventory[week - 1] -
      grossRequirements[week] +
      scheduledReceipts[week];
    if (projectedEndingInventoryValue < 0 && week - mrpLeadTime >= 0) {
      netRequirements[week] = -projectedEndingInventoryValue;
      plannedOrderReleases[week - mrpLeadTime] = lotSize;
      plannedOrderReceipts[week] = lotSize;
      projectedEndingInventoryValue += lotSize;
    }
    projectedEndingInventory.push(projectedEndingInventoryValue);
  }
  return {
    grossRequirements: grossRequirements,
    projectedEndingInventory: projectedEndingInventory,
    netRequirements: netRequirements,
    plannedOrderReleases: plannedOrderReleases,
    plannedOrderReceipts: plannedOrderReceipts,
  };
}

export default mrp;
