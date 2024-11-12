import { Button, Col, Form, Input, Row } from "antd";
import { criarLivro } from "./actions";
import { SaveOutlined } from "@ant-design/icons";
import { useAppContext } from "@/app/_hooks/UseAppContext";

type Props = {};
export const FormCriarLivro = ({}: Props) => {
  const { messageApi ,setLoading} = useAppContext();
  return (
    <Form
      onFinish={(values) => {
        criarLivro(values, messageApi,setLoading);
      }}
    >
      <Row justify={"center"} gutter={[0, 8]}>
        <Col span={24}>
          <Form.Item
            label="Titulo"
            name={"titulo"}
            required
            rules={[{ required: true, message: "Campo obrigatório" }]}
            labelCol={{ md: 24, style: { fontWeight: "bold" } }}
            labelAlign="left"
          >
            <Input size="large" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Autor"
            name={"autor"}
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
