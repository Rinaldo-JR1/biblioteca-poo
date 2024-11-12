export interface GetClientesResponse {
  message: string;
  data: Data[];
}

export interface Data {
  id: number;
  nome: string;
}
