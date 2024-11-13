import { ClienteService } from "@/src/service/ClienteService";
import { LivroService } from "@/src/service/LivroService";

export const getClientes = async () => {
  const { data, status } = await ClienteService.getClientes();
  return { data, status };
};
export const getLivros = async () => {
  const { data, status } = await LivroService.getLivros();
  return { data, status };
};
