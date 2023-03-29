function mrp(
  ghpProductionArray,
  ghpLeadTime,
  scheduledReceipts = [],
  mrpInStock,
  mrpLeadTime = 3,
  lotSize
) {
  const grossRequirements = [];
  for (let i = ghpLeadTime; i < ghpProductionArray.length; i++) {
    grossRequirements.push(ghpProductionArray[i]);
  }
  const weeksLength = grossRequirements.length;
  const projectedEndingInventory = [];
  const netRequirements = [];
  const plannedOrderReleases = [];
  const plannedOrderReceipts = [];

  for (let week = 0; week < weeksLength; week++) {
    netRequirements.push(0);
    plannedOrderReleases.push(0);
    plannedOrderReceipts.push(0);
  }

  projectedEndingInventory.push(
    mrpInStock - grossRequirements[0] + Number(scheduledReceipts[0])
  );

  for (let week = 1; week < weeksLength; week++) {
    let projectedEndingInventoryValue =
      Number(projectedEndingInventory[week - 1]) -
      Number(grossRequirements[week]) +
      Number(scheduledReceipts[week]);

    if (projectedEndingInventoryValue < 0 && week - mrpLeadTime >= 0) {
      netRequirements[week] = -projectedEndingInventoryValue;
      plannedOrderReleases[week - mrpLeadTime] = Number(lotSize);
      plannedOrderReceipts[week] = Number(lotSize);
      projectedEndingInventoryValue += Number(lotSize);
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
