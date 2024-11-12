import { Button, Col, Form, Input, Row } from "antd";
import { criarCliente } from "./actions";
import { useAppContext } from "@/app/_hooks/UseAppContext";
import { SaveOutlined } from "@ant-design/icons";

type Props = {};
export const FormCriarCliente = ({}: Props) => {
  const { messageApi, setLoading } = useAppContext();
  return (
    <Form
      onFinish={(values) => {
        criarCliente(values, messageApi, setLoading);
      }}
    >
      <Row justify={"center"} gutter={[0, 8]}>
        <Col span={24}>
          <Form.Item
            label="Nome do cliente"
            name={"nome"}
            required
            rules={[{ required: true, message: "Campo obrigatório" }]}
            labelCol={{ md: 24, style: { fontWeight: "bold" } }}
            labelAlign="left"
          >
            <Input size="large" />
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
