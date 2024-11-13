import { api } from "@/src/api/config";
import { FormCriarAluguel } from "@/src/shared/types/forms/formCriarAluguel";
import { AluguelResponse } from "@/src/shared/types/Response/Alugueis";

export class AluguelService {
  static async getAlugueis() {
    return await api.get<AluguelResponse>("/alugueis/all");
  }
  static async getAluguelPorId(id: number) {
    return await api.get<AluguelResponse>(`/alugueis/${id}`);
  }
  static async criarAluguel(data: FormCriarAluguel) {
    return await api.post("/alugueis", {
      livro: {
        id: data.livro,
      },
      cliente: {
        id: data.cliente,
      },
    });
  }
}
