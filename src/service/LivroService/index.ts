import { api } from "@/src/api/config";
import { FormCriarLivro } from "@/src/shared/types/forms/formCriarLivro";
import { LivroResponse } from "@/src/shared/types/Response/Livros";

export class LivroService {
  static async getLivros() {
    const { data, status } = await api.get<LivroResponse>("/livros");
    return { data, status };
  }
  static async criarLivro(livro: FormCriarLivro) {
    const { data, status } = await api.post<LivroResponse["data"][0]>(
      "/livros",
      {
        autor: livro.autor,
        titulo: livro.titulo,
        status: true,
      }
    );
    return { data, status };
  }
}
