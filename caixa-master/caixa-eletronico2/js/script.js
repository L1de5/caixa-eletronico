let c = 0;
function ATM(){
  let total = 0;
   this.abastecer = function (valor, nota){
     if(c === 0){
       this.ncinco = 0;
       this.ndez = 0;
       this.nvinte = 0;
       this.ncinq = 0;
       this.ncem = 0;
       c=1;
     }
     if(5 === nota){
       this.ncinco += valor;
       total += 5*valor;
     }
     if(10 === nota){
       this.ndez += valor;
       total += 10*valor;
     }
     if(20 === nota){
       this.nvinte += valor;
       total += 20*valor;
     }
     if(50 === nota){
       this.ncinq += valor;
       total += 50*valor;
     }
     if(100 === nota){
       this.ncem += valor;
       total += 100*valor;
     }
   }
   this.consultarQuantidade = function (nota){

      if(nota%5 === 0){
        if(5 === nota){
         return this.ncinco;
       }
       if(10 === nota){
         return this.ndez;
       }
       if(20 === nota){
         return this.nvinte;
       }
       if(50 === nota){
         return this.ncinq;
       }
       if(100 === nota){
         return this.ncem;
       }
     }else return 0

   }
   this.consultarValor = function (){
     return total;
   }
   this.retirar = function (valor){
     let r = valor;
     let c1 = 0;
     let c2 = 0;
     let c3 = 0;
     let c4 = 0;
     let c5 = 0;
   if(total >= valor){
       if(valor%100 != valor){
         for(c1 = 0;r >= 100 && this.ncem > 0; c1++){
           r -= 100;
           this.ncem--;
         }
       }
       if(valor%50 != valor){
         for(c2 = 0;r >= 50 && this.ncinq > 0; c2++){
           r -= 50;
           this.ncinq--;
         }
       }
       if(valor%20 != valor){
         for(c3 = 0;r >= 20 && this.nvinte > 0; c3++){
           r -= 20;
           this.nvinte--;
         }
       }
       if(valor%10 != valor){
         for(c4 = 0;r >= 10 && this.ndez > 0; c4++){
           r -= 10;
           this.ndez--;
         }
       }
       if(valor%5 != valor){
         for(c5 = 0;r >= 5 && this.ncinco > 0; c5++){
           r -= 5;
           this.ncinco--;
         }
       }
       if(r !== 0){
         this.ncem += c1;
         this.ncinq += c2;
         this.nvinte += c3;
         this.ndez += c4;
         this.ncinco += c5;
       }else total -= valor;
     }
   }
}
const atm = new ATM();
// abastecendo com 20 notas de 100
atm.abastecer(33, 100);
// verificando a quantidade de cédulas de 100
console.log(atm.consultarQuantidade(100)); // 33
// espera-se 33 cédulas
console.log(atm.consultarQuantidade(100) === 33);
// espera-se nenhuma cédula de qualquer outro valor
console.log(atm.consultarQuantidade(5)); // 0
console.log(atm.consultarQuantidade(5) === 0);
console.log(atm.consultarQuantidade(50)); // 0
console.log(atm.consultarQuantidade(50) === 0);
// mesmo os que não existem
console.log(atm.consultarQuantidade(3)); // 0
console.log(atm.consultarQuantidade(3) === 0);
// abastecimento de cédulas não existentes são rejeitados
atm.abastecer(8, 3); // 8 cédulas de R$ 3,00
console.log(atm.consultarQuantidade(3) === 0);
// consultando o valor
console.log(atm.consultarValor()); // 33 * 100 = 3300 reais
console.log(atm.consultarValor() === 3300);
// retirada rejeitada, não há cédulas que combinem R$ 350,00 (por ex.: de R$ 10, R$ 20 ou R$ 50)
atm.retirar(350);
console.log(atm.consultarQuantidade(100));
console.log(atm.consultarValor() === 3300);
// até aqui 0.3 pontos <=========================================

// retirada válida
atm.retirar(300); // 3 cédulas de 100
console.log(atm.consultarQuantidade(100) === 30);
console.log(atm.consultarValor() === 3000);
// retirada rejeitada
atm.retirar(3100); // não há cédulas suficientes
console.log(atm.consultarQuantidade(100) === 30);
console.log(atm.consultarValor() === 3000);
// retirada válida
atm.retirar(3000); // vai esvaziar o ATM
console.log(atm.consultarQuantidade(100) === 0);
console.log(atm.consultarValor() === 0);
// abastecimento de R$ 50,00 e R$ 10,00
atm.abastecer(10, 10); // 10 cédulas de R$ 10,00
atm.abastecer(10, 50); // 10 cédulas de R$ 50,00
console.log(atm.consultarQuantidade(10) === 10);
console.log(atm.consultarQuantidade(50) === 10);
console.log(atm.consultarValor() === 600); // 10 * 10 + 10 * 50
// retirada prioriza cédulas de maior valor
atm.retirar(100); // retira 2 cédulas de R$ 50,00
console.log(atm.consultarQuantidade(10) === 10);
console.log(atm.consultarQuantidade(50) === 8);
console.log(atm.consultarValor() === 500); // 10 * 10 + 8 * 50
// retirada combinada
atm.retirar(90); // 1 cédula de R$ 50,00 e 4 cédulas de R$ 10,00
console.log(atm.consultarQuantidade(10) === 6);
console.log(atm.consultarQuantidade(50) === 7);
console.log(atm.consultarValor() === 410); // 6 * 10 + 7 * 50

// até aqui 0.7 ponto <=========================================
atm.retirar(410);
atm.abastecer(2, 100);
atm.abastecer(2, 50);
atm.abastecer(2, 20);
atm.abastecer(2, 10);
atm.abastecer(2, 5);
console.log(atm.consultarQuantidade(100) === 2);
console.log(atm.consultarQuantidade(50) === 2);
console.log(atm.consultarQuantidade(20) === 2);
console.log(atm.consultarQuantidade(10) === 2);
console.log(atm.consultarQuantidade(5) === 2);
console.log(atm.consultarValor() === 370);

atm.retirar(195);
console.log(atm.consultarQuantidade(100) === 1);
console.log(atm.consultarQuantidade(50) === 1);
console.log(atm.consultarQuantidade(20) === 0);
console.log(atm.consultarQuantidade(10) === 2);
console.log(atm.consultarQuantidade(5) === 1);
console.log(atm.consultarValor() === 175);

atm.retirar(190);
console.log(atm.consultarQuantidade(100) === 1);
console.log(atm.consultarQuantidade(50) === 1);
console.log(atm.consultarQuantidade(20) === 0);
console.log(atm.consultarQuantidade(10) === 2);
console.log(atm.consultarQuantidade(5) === 1);
console.log(atm.consultarValor() === 175);

// até aqui 1.0 ponto <=========================================
