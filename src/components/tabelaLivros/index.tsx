"use client";
import { LivroResponse } from "@/src/shared/types/Response/Livros";
import { useEffect, useState } from "react";
import { getLivros } from "./actions";
import { Col, Row, Table, TableProps, Tag } from "antd";

type Props = {};
export const TabelaLivros = ({}: Props) => {
  const [livros, setLivros] = useState<LivroResponse["data"]>([]);

  useEffect(() => {
    (async () => {
      const response = await getLivros();
      setLivros(response.data.data);
    })();
  }, []);

  const handleStatus = (status: boolean) => {
    if (status) {
      return <Tag color="green">Disponível</Tag>;
    }
    return <Tag color="red">Indisponível</Tag>;
  };

  const columns: TableProps<LivroResponse["data"][0]>["columns"] = [
    {
      title: "ID",
      render: (data) => {
        return <p>{data.id}</p>;
      },
    },
    {
      title: "Autor",
      render: (data) => {
        return <p>{data.autor}</p>;
      },
    },
    {
      title: "Titulo",
      render: (data) => {
        return <p>{data.titulo}</p>;
      },
    },
    {
      title: "Status",
      render: (data) => {
        return <p>{handleStatus(data.status)}</p>;
      },
    },
  ];

  return (
    <div>
      <Row>
        <Col span={24}>
          <Table<LivroResponse["data"][0]>
            columns={columns}
            dataSource={livros}
          />
        </Col>
      </Row>
    </div>
  );
};
