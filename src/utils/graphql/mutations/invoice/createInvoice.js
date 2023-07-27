const createInvoiceMt = `
    mutation (
        $invoice: CreateInvoiceInput
    ) {
        createInvoice( invoice : $invoice ) {
            id
        }
    }
`;

export default createInvoiceMt;