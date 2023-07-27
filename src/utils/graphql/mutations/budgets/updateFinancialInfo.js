const updateFinancialInfo = `
    mutation updateFinancialInfo ($demandId : ID!, $totalPrice: Float, $items:[UpdateDemandItem])
        {
        updateFinancialInfo(
            demandId : $demandId,
            items: $items,
            totalPrice: $totalPrice,
        )
    }



`;

export default updateFinancialInfo;
