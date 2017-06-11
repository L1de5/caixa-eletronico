function GD(){
  this.resto = 0;
  this.conta = 0;
  this.historico = [];
  this.addFundo = function (valor){
    this.fundo = 0;
    if(valor > 0){
      this.fundo = valor + this.resto;
    }
    else{
      this.fundo = this.resto;
    }
  }
  this.verificarFundo = function (){
    return this.fundo;
  }
  this.pagarConta = function (valor, conta){
    if(valor < this.fundo){
      this.fundo -= valor;
      this.resto = this.fundo - valor;
      this.historico.push("A Conta de " + conta + " no Valor de R$" + valor + " Foi PAGA.");
      this.historico.push("No seu fundo restou R$" + this.resto);
    }
    else{
      this.historico.push("Infelizmente a Conta de " + conta + " no Valor de R$" + valor + " não foi efetuada por falta de fundo.");
    }
  }
  this.guardarDinheiro = function (porcento){
    if(porcento >= 0 && porcento <= 100){
      this.conta += (this.fundo/100)*porcento;
      this.resto = this.fundo - this.conta;
      this.historico.push("Foi guardado R$" + (this.fundo/100)*porcento + " na sua Conta do Banco.");
      this.historico.push("No seu fundo restou R$" + this.resto);
      return true;
    }
    else{
      return false;
    }
  }
  this.verificarHistorico = function (){
    return this.historico;
  }
  this.verificarConta = function (){
    return this.conta;
  }
  this.verificarResto = function (){
    return this.resto;
  }
}
//criar um gerenciador que é abastecido a cada mês e só precisa do valor das suas contas que ele paga pra você.
const gerenciador = new GD();
//começo adicionando a quantia mensal que recebi.
gerenciador.addFundo(2500);
console.log(gerenciador.verificarFundo() === 2500);
//Conta com valor insufisiente no Fundo.
gerenciador.pagarConta(2550, "Computador Desktop");
console.log(gerenciador.verificarFundo() === 2500);
console.log(gerenciador.verificarHistorico());
//Conta com um valor suficiente.
gerenciador.pagarConta(50, "água")
console.log(gerenciador.verificarFundo() === 2450);
console.log(gerenciador.verificarHistorico());
gerenciador.pagarConta(150, "luz")
console.log(gerenciador.verificarFundo() === 2300);
console.log(gerenciador.verificarHistorico());
//Tentar depositar com porcentagem invalida
console.log(gerenciador.guardarDinheiro(-50) === false);
console.log(gerenciador.verificarConta());
console.log(gerenciador.guardarDinheiro(120) === false);
console.log(gerenciador.verificarConta());
//Deposito em conta com porcentagem valida.
console.log(gerenciador.guardarDinheiro(50) === true);
console.log(gerenciador.verificarConta());
console.log(gerenciador.verificarHistorico());
//Após depositar o que sobra pro mês seguinte vai para o resto que é o fundo que restou
console.log(gerenciador.verificarResto());
//Então no mês seguinte é digitado um valor invalido.
gerenciador.addFundo(-2600);
console.log(gerenciador.verificarFundo());
//Então digita o valor certo
gerenciador.addFundo(2600);
console.log(gerenciador.verificarFundo());
