function saudacaoBot(canal){
    const canalFormatado = canal.toLowerCase();

    if (canalFormatado === 'whatsapp'){
        return 'Ola, este e o WhatsAppBot!';
    } else if (canalFormatado === 'telegram'){
        return 'Ola, este e o TelegramBot!';
    } else if (canalFormatado === 'webchat'){
        return 'Ola, este e o WebChatBot!';
    } else {
        return 'Canal nao suportado';
    }
}

const canalEntrada = gets();

print(saudacaoBot(canalEntrada));