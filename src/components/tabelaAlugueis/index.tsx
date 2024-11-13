'use client'

import { useEffect, useState } from "react";
import { getAlugueis } from "./actions";
import { AluguelResponse } from "@/src/shared/types/Response/Alugueis";
import { Col, Row, Table, TableProps } from "antd";
import { formatDate } from "@/src/utils/date/dateUtils";

type Props = {

}
export const TabelaAlugueis = ({ }: Props) => {
    const [alugueis, setAlugueis] = useState<AluguelResponse['data']>([]);
    useEffect(() => {
        (async () => {
            const { data } = await getAlugueis();
            setAlugueis(data.data);
        })()
    }, [])

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
    )
};