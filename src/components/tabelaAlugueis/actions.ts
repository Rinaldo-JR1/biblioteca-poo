import { AluguelService } from "@/src/service/AluguelService";

export const getAlugueis = async () => {
  const { data, status } = await AluguelService.getAlugueis();
  return { data, status };
};
