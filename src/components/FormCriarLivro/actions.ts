import { LivroService } from "@/src/service/LivroService";
import { FormCriarLivro } from "@/src/shared/types/forms/formCriarLivro";
import { MessageInstance } from "antd/es/message/interface";
import { Dispatch, SetStateAction } from "react";

export const criarLivro = async (
  form: FormCriarLivro,
  messageApi: MessageInstance,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true);
  const { status, data } = await LivroService.criarLivro(form);
  if (status === 201) {
    messageApi.success("Livro criado com sucesso");
  } else {
    messageApi.error("Erro ao criar livro");
  }
  setLoading(false);
};
