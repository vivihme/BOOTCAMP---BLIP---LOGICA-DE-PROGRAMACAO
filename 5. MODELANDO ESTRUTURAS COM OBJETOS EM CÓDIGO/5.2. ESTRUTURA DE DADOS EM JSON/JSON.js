let invoice = {
    name: 'Vinicius',
    age: 24,
    products: {
        0: ['Mouse 2xwm', 29.90],
        1: ['Teclado Mecânico', 129.00],
        2: ['Monitor', 899.99],
        3: ['TV 100 Polegadas', 10000.00],
    },
    taxes: 98.98,
}
generateInvoice(invoice)
function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`);
    console.log(`A idade do cliente é ${invoice.age}`);

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`${productName}: R$ ${productPrice}`)
    }
    console.log(`O produto é ${invoice.products[0]}`);
}