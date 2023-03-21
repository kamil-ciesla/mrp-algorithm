function mrp(ghpLeadTime, ghpInStock, mrpLeadTime, batchSize, mrpInStock){
    console.log('Starting MRP algorithm...')
    const params = {ghpLeadTime, ghpInStock, mrpLeadTime, batchSize, mrpInStock}
    console.log("Algorithm_params: " + Object.values(params))
}

export default mrp