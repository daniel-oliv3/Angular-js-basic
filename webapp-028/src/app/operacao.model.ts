import { threadId } from "worker_threads";

export class cl_operacao {
  //valor 1 + valor 2 = resultado;
  public valor1: number;
  public valor2: number;
  public tipo_operacao: number;
  public resultado: number;

  min: number = 1;
  max: number = 10;

  //==
  constructor(){
    //Criar uma operação matematica aleatoria
    this.valor1 = this.GerarValorAleatorio(1, 10);

  }

  GerarValorAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}


