import { api } from "@/src/api/config";
import { AluguelResponse } from "@/src/shared/types/Response/Alugueis";

export class AluguelService {
  static async getAlugueis() {
    return await api.get<AluguelResponse>("/alugueis/all");
  }
  static async getAluguelPorId(id: number) {
    return await api.get<AluguelResponse>(`/alugueis/${id}`);
  }
  static async criarAluguel(data: any) {
    return await api.post("/alugueis", data);
  }
}
