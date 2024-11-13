"use client";

import { useEffect, useState } from "react";
import { confirmarEntrega, getAlugueis } from "./actions";
import { AluguelResponse } from "@/src/shared/types/Response/Alugueis";
import {
  Button,
  Col,
  Popconfirm,
  PopconfirmProps,
  Row,
  Table,
  TableProps,
  Tag,
} from "antd";
import { formatDate } from "@/src/utils/date/dateUtils";
import { useAppContext } from "@/app/_hooks/UseAppContext";

type Props = {};
export const TabelaAlugueis = ({}: Props) => {
  const [alugueis, setAlugueis] = useState<AluguelResponse["data"]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getAlugueis();
      setAlugueis(data.data);
    })();
  }, []);

  const { messageApi } = useAppContext();

  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    messageApi.success("Click on Yes");
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
    messageApi.error("Click on No");
  };

  const handleActionButton = (
    status: boolean,
    alguel: AluguelResponse["data"][0]
  ) => {
    const confirm: PopconfirmProps["onConfirm"] = (e) => {
      confirmarEntrega(alguel);
    };

    const cancel: PopconfirmProps["onCancel"] = (e) => {
    };

    if (!status) {
      return <Tag color="blue">Devolvido</Tag>;
    }
    return (
      <Popconfirm
        title="Confirmar entrega"
        description="Confirmar entrega do livro?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Sim"
        cancelText="Não"
      >
        <Button type="primary">Devolver</Button>
      </Popconfirm>
    );
  };

  const columns: TableProps<AluguelResponse["data"][0]>["columns"] = [
    {
      title: "Id",
      render: (data) => {
        return <p>{data.id}</p>;
      },
    },
    {
      title: "Nome do cliente",
      render: (data) => {
        return <p>{data.cliente.nome}</p>;
      },
    },
    {
      title: "Livro alugado",
      render: (data) => {
        return <p>{data.livro.titulo}</p>;
      },
    },
    {
      title: "Data de inicio",
      render: (data) => {
        return <p>{formatDate(data.dataInicio)}</p>;
      },
    },
    {
      title: "Data fim",
      render: (data) => {
        return <p>{formatDate(data.dataFim)}</p>;
      },
    },
    {
      title: "Ações",
      render: (data) => {
        return handleActionButton(data.status, data);
      },
    },
  ];

  return (
    <div>
      <Row>
        <Col span={24}>
          <Table<AluguelResponse["data"][0]>
            columns={columns}
            dataSource={alugueis}
          />
        </Col>
      </Row>
    </div>
  );
};
