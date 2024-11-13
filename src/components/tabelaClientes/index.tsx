'use client'
import { GetClientesResponse } from "@/src/shared/types/Response/Clientes";
import { useEffect, useState } from "react";
import { getClientes } from "./actions";
import { Col, Row, Table, TableProps } from "antd";

type Props = {};
export const TabelaClientes = ({ }: Props) => {
  const [clientes, setClientes] = useState<GetClientesResponse["data"]>([]);
  useEffect(() => {
    (async () => {
      const response = await getClientes();
      setClientes(response.data.data);
    })();
  }, []);

  const columns: TableProps<GetClientesResponse["data"][0]>["columns"] = [
    {
      title: "ID",
      render: (data) => {
        return <p>{data.id}</p>;
      },
    },
    {
      title: "Nome",
      render: (data) => {
        return <p>{data.nome}</p>;
      },
    },
  ];

  useEffect(() => { }, []);
  return (
    <div>
      <Row>
        <Col span={24}>
          <Table<GetClientesResponse["data"][0]>
            columns={columns}
            dataSource={clientes}
          />
        </Col>
      </Row>
    </div>
  );
};
