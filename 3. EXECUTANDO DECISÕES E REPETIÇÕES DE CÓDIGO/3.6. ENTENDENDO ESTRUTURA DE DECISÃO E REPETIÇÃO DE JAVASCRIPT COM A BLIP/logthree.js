// Lê o tipo de mensagem a ser contado ("BOT" ou "USER")
const tipoMensagem = gets();
let contador = 0;

// Usamos um loop infinito que será interrompido pelo break
while (true) {
    let linha = gets();

    // Verificação rigorosa da interrupção
    // O trim() remove espaços extras que podem vir na entrada
    if (!linha || linha.trim() === "FIM") {
        break;
    }

    // Verificamos se a linha começa com o tipo + ":"
    if (linha.startsWith(tipoMensagem + ":")) {
        contador++;
    }
}

// Imprime apenas o número, sem texto adicional
print(contador);