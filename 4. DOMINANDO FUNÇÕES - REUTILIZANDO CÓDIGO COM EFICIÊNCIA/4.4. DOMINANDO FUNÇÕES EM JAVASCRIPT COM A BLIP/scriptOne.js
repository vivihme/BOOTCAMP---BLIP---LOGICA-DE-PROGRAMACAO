const entrada = gets();
const resultado = transform(entrada);
print(resultado)

function transform(texto){
    return texto.toUpperCase();
}