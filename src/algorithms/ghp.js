
function ghp(projectedDemandArray, productionArray, ghpLeadTime, inStock) {
  const available = [];
  available.push(Number(inStock));
  for (let i = 1; i < projectedDemandArray.length; i++) {
    available.push(
      calculateAvailable(
        Number(available.at(-1)),
        Number(projectedDemandArray[i]),
        Number(productionArray[i])
      )
    );
  }
  return {
    available: available,
    ghpInStock: inStock,
    ghpLeadTime: ghpLeadTime,
    projectedDemandArray: projectedDemandArray,
    productionArray: productionArray,
    grossRequirements: calculateGrossRequirements(productionArray, ghpLeadTime)
  }
}

function calculateAvailable(
  previousAvailable,
  currentProjectedDemand,
  currentProduction
) {
  return previousAvailable - currentProjectedDemand + currentProduction;
}

function calculateGrossRequirements(productionArray, ghpLeadTime) {
  const grossRequirements = productionArray.slice(ghpLeadTime);
  for (let i = 0; i < ghpLeadTime; i++) {
    grossRequirements.push(0);
  }
  return grossRequirements;
}

export default ghp;
