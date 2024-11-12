import { api } from "@/src/api/config";
import { LivroResponse } from "@/src/shared/types/Response/Livros";

export class LivroService {
  static async getLivros() {
    const { data, status } = await api.get<LivroResponse>("/livros");
    return { data, status };
  }
}
