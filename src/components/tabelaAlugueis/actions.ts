import { AluguelService } from "@/src/service/AluguelService";
import { AluguelResponse } from "@/src/shared/types/Response/Alugueis";

export const getAlugueis = async () => {
  const { data, status } = await AluguelService.getAlugueis();
  return { data, status };
};
export const confirmarEntrega = async (aluguel: AluguelResponse["data"][0]) => {
  const { data, status } = await AluguelService.confirmarEntrega(aluguel);
  return { data, status };
};
