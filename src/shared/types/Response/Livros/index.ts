export interface LivroResponse {
  message: string;
  data: Data[];
}

export interface Data {
  id: number;
  titulo: string;
  autor: string;
  status: boolean;
}
