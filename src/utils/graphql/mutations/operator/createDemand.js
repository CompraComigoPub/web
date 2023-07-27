const createDemandMt = `
 mutation createDemand ( 
    $supplierId: ID!
    $items: [DemandItemInput]
    $totalPrice: Float
 ) { 
    createDemand(demand : {
            supplierId : $supplierId,
            items:  $items,
            totalPrice : $totalPrice}
            ) {
                id
            }


}

`;

export default createDemandMt;
