

export class cl_operacao {
  //valor 1 + valor 2 = resultado;
  public valor1: number;
  public valor2: number;
  public tipo_operacao: number;
  public resultado: number;
  public str_operacao: string;

  min: number = 1;
  max: number = 10;



  //==
  constructor(){
    //Criar uma operação matematica aleatoria
    this.valor1 = this.GerarValorAleatorio(1, 10);
    this.valor2 = this.GerarValorAleatorio(1, 10);
    this.tipo_operacao = this.GerarValorAleatorio(1, 4);

    switch(this.tipo_operacao){
      //Adição
      case 1:
        this.str_operacao = this.valor1 + ' + ' + this.valor2 + ' = ';
        this.resultado = this.valor1 + this.valor2;
        break;
      //Subtração
      case 2:
        this.str_operacao = this.valor1 + ' - ' + this.valor2 + ' = ';
        this.resultado = this.valor1 - this.valor2;
        break;
      //Multiplicação
      case 3:
        this.str_operacao = this.valor1 + ' * ' + this.valor2 + ' = ';
        this.resultado = this.valor1 * this.valor2;
        break;
      //Divisão
      case 4:
        this.str_operacao = this.valor1 + ' : ' + this.valor2 + ' = ';
        this.resultado = this.valor1 / this.valor2;
        break;
    }
  }

  GerarValorAleatorio(min, max){
    return Math.floor(Math.random() * (min - max + 1) + min);
  }

}


