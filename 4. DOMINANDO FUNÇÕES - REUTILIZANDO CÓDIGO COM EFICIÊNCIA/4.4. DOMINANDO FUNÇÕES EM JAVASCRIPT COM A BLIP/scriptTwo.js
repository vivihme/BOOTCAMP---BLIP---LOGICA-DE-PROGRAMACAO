const canal = gets();
const cliente = gets();
print(mensagem());

function mensagem(){
    let saudacao = `Ola, ${cliente}! Bem-vindo ao canal ${canal}.`;
    return saudacao;
}