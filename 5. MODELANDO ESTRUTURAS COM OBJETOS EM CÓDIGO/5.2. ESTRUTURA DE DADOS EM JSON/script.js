let name = 'Vinicius';
let age = 24;
let products = ['Mouse 2xwm', 'Teclado Mecânico', 'Monitor'];
let productsValues = [29.90, 129.99, 899.99];

generateInvoice(name, age, products, productsValues)

function generateInvoice(name, age, products, productsValues){
    console.log(`O comprador é ${name}`);
    console.log(`A idade do cliente é ${age}`)
    console.log(`O produto é ${products[0]}`);
    console.log(`O valor é ${productsValues[0]}`);

}