import { ClienteService } from "@/src/service/ClienteService";

export const getClientes = async () => {
  const { data, status } = await ClienteService.getClientes();
  return { data, status };
};
