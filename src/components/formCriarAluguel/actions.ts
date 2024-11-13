import { AluguelService } from "@/src/service/AluguelService";
import { ClienteService } from "@/src/service/ClienteService";
import { LivroService } from "@/src/service/LivroService";
import { FormCriarAluguel } from "@/src/shared/types/forms/formCriarAluguel";
import { MessageInstance } from "antd/es/message/interface";
import { Dispatch, SetStateAction } from "react";

export const getClientes = async () => {
  const { data, status } = await ClienteService.getClientes();
  return { data, status };
};
export const getLivros = async () => {
  const { data, status } = await LivroService.getLivros();
  return { data, status };
};
export const criarAluguel = async (
  form: FormCriarAluguel,
  messageApi: MessageInstance,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true);

  const { data, status } = await AluguelService.criarAluguel(form);
  if (status === 201) {
    messageApi.success("Alguel criado");
  } else {
    messageApi.error("Erro ao criar aluguel");
  }
  setLoading(false);
};
