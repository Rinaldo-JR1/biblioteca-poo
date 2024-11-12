import { ClienteService } from "@/src/service/ClienteService";
import { FormCriarCliente } from "@/src/shared/types/forms/formCriarCliente";
import { MessageInstance } from "antd/es/message/interface";
import { Dispatch, SetStateAction } from "react";

export const criarCliente = async (
  form: FormCriarCliente,
  messageApi: MessageInstance,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true);
  const { status, data } = await ClienteService.createCliente(form);
  if (status === 201) {
    messageApi.success("Livro criado com sucesso");
  } else {
    messageApi.error("Erro ao criar livro");
  }
  setLoading(false);
};
