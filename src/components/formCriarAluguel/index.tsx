import { SaveOutlined } from "@ant-design/icons";
import { Button, Col, Form, Row, Select, SelectProps } from "antd";
import { useEffect, useState } from "react";
import { criarAluguel, getClientes, getLivros } from "./actions";
import { useAppContext } from "@/app/_hooks/UseAppContext";

export const FormCriarAluguel = () => {
  const [livrosOptions, setLivrosOptions] = useState<SelectProps["options"]>(
    []
  );
  const [clientesOptions, setClientesOptions] = useState<
    SelectProps["options"]
  >([]);
  const { setLoading, messageApi } = useAppContext();
  useEffect(() => {
    (async () => {
      const resClientes = await getClientes();
      const resLivros = await getLivros();
      setLivrosOptions(
        resLivros.data?.data.map((livro) => ({
          label: livro.titulo,
          value: livro.id,
        }))
      );
      let temp: any[] = [];

      resLivros.data?.data.map((livro) => {
        if (livro.status) {
          temp.push({
            label: livro.titulo,
            value: livro.id,
          });
        }
      });
      setLivrosOptions(temp);
      setClientesOptions(
        resClientes.data?.data.map((cliente) => {
          return {
            label: cliente.nome,
            value: cliente.id,
          };
        })
      );
    })();
  }, []);

  return (
    <Form
      onFinish={(values) => {
        criarAluguel(values, messageApi, setLoading);
      }}
    >
      <Row justify={"center"} gutter={[0, 8]}>
        <Col span={24}>
          <Form.Item
            label="Cliente"
            name={"cliente"}
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
  );
};
