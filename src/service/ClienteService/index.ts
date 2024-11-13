import { api } from "@/src/api/config";
import { FormCriarCliente } from "@/src/shared/types/forms/formCriarCliente";
import { GetClientesResponse } from "@/src/shared/types/Response/Clientes";

export class ClienteService {
  static async getClientes() {
    return await api.get<GetClientesResponse>("/clientes/all");
  }
  static async createCliente(data: FormCriarCliente) {
    return await api.post("/clientes/create", {
      nome: data.nome,
    });
  }
}
