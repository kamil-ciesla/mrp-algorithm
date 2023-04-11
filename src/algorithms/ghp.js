
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
    productionArray: productionArray
  }
}

function calculateAvailable(
  previousAvailable,
  currentProjectedDemand,
  currentProduction
) {
  return previousAvailable - currentProjectedDemand + currentProduction;
}

export default ghp;
