import { SaveOutlined } from "@ant-design/icons";
import { Button, Col, Form, Row, Select, SelectProps } from "antd";
import { useEffect, useState } from "react";
import { getClientes, getLivros } from "./actions";

export const FormCriarAluguel = () => {
    const [livrosOptions, setLivrosOptions] = useState<SelectProps['options']>([]);
    const [clientesOptions, setClientesOptions] = useState<SelectProps['options']>([]);
    useEffect(() => {
        (async () => {
            const resClientes = await getClientes();
            const resLivros = await getLivros();
            setLivrosOptions(resLivros.data?.data.map((livro) => ({
                label: livro.titulo
                , value: livro.id
            })));
            setClientesOptions(resClientes.data?.data.map((livro) => ({
                label: livro.nome
                , value: livro.id
            })));

        })()

    }, [])

    return (<Form
        onFinish={(values) => {

        }}
    >
        <Row justify={"center"} gutter={[0, 8]}>
            <Col span={24}>
                <Form.Item
                    label="Cliente"
                    name={"nome"}
                    required
                    rules={[{ required: true, message: "Campo obrigatório" }]}
                    labelCol={{ md: 24, style: { fontWeight: "bold" } }}
                    labelAlign="left"
                >
                    <Select size="large" options={clientesOptions} />
                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item
                    label="Livro"
                    name={"livro"}
                    required
                    rules={[{ required: true, message: "Campo obrigatório" }]}
                    labelCol={{ md: 24, style: { fontWeight: "bold" } }}
                    labelAlign="left"
                >
                    <Select size="large" options={livrosOptions} />

                </Form.Item>
            </Col>
        </Row>
        <Row justify={"center"}>
            <Col>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        icon={<SaveOutlined />}
                        size="large"
                    >
                        Criar
                    </Button>
                </Form.Item>
            </Col>
        </Row>
    </Form>
    )
}