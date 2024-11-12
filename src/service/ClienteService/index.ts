import { api } from "@/src/api/config";
import { GetClientesResponse } from "@/src/shared/types/Response/Clientes";

export class ClienteService {
  static async getClientes() {
    return await api.get<GetClientesResponse>("/clientes/all");
  }
}
