class formaDeBolo {
    constructor(saborDaMassa, saborDoRecheio, saborDaCobertura) {
        this.saborDaMassa = saborDaMassa;
        this.saborDoRecheio = saborDoRecheio;
        this.saborDaCobertura = saborDaCobertura;
    }
    toString(){
        console.log(`O sabor da massa é ${this.saborDaMassa}, o sabor do recheio é ${this.saborDoRecheio} e o sabor da cobertura é ${this.saborDaCobertura}`);
    }
}
let boloDeFesta = new formaDeBolo("chocolate", "brigadeiro", "chocolate");
let boloPremium = new formaDeBolo("baunilha", "doce de leite", "chocolate branco");
boloDeFesta.toString();
boloPremium.toString();