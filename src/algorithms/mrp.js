function mrp(
  grossRequirements,
  quantityMultiplier,
  scheduledReceipts = [],
  inStock,
  leadTime,
  lotSize
) {
  grossRequirements = grossRequirements.map(item => item * quantityMultiplier)
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

  const firstProjectedEndingInventoryValue = inStock - grossRequirements[0] + Number(scheduledReceipts[0]);
  projectedEndingInventory.push(firstProjectedEndingInventoryValue);
  if (firstProjectedEndingInventoryValue < 0) {
    netRequirements[0] = -firstProjectedEndingInventoryValue;
  }

  for (let week = 1; week < weeksLength; week++) {
    let projectedEndingInventoryValue =
      Number(projectedEndingInventory[week - 1]) -
      Number(grossRequirements[week]) +
      Number(scheduledReceipts[week]);

    if (projectedEndingInventoryValue < 0) {
      netRequirements[week] = -projectedEndingInventoryValue;
      if (week - leadTime >= 0) {
        plannedOrderReleases[week - leadTime] = Number(lotSize);
        plannedOrderReceipts[week] = Number(lotSize);
        projectedEndingInventoryValue += Number(lotSize);
      }
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
