
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
  const grossRequirements = [Array(productionArray.length).fill(0)];
  for (let i = ghpLeadTime; i < productionArray.length; i++) {
    grossRequirements[i - ghpLeadTime] = productionArray[i];
  }
  return grossRequirements;
}

export default ghp;
