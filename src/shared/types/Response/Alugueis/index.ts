export interface AluguelResponse {
  message: string;
  data: Data[];
}

export interface Data {
  id: number;
  livro: Livro;
  cliente: Cliente;
  dataInicio: Date;
  dataFim: Date;
}

export interface Cliente {
  id: number;
  nome: string;
}

export interface Livro {
  id: number;
  titulo: string;
  autor: string;
  status: boolean;
}
