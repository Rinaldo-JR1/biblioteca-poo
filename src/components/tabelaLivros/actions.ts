import { LivroService } from "@/src/service/LivroService";
import { apiUrl } from "@/src/utils/consts";

export const getLivros = async () => {
  console.log(apiUrl);

  return await LivroService.getLivros();
};
