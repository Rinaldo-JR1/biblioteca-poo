"use client";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Row } from "antd";
import { useState } from "react";
import { FormCriarCliente } from "../formCriarCliente";

type Props = {};
export const CriarCliente = ({}: Props) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Row justify={"end"} style={{ marginBottom: "2vh" }}>
        <Col span={5}>
          <Button
            onClick={showDrawer}
            icon={<PlusCircleOutlined />}
            style={{ width: "100%" }}
            type="primary"
          >
            Criar cliente
          </Button>
        </Col>
      </Row>
      <Drawer
        title="Cadastrar cliente"
        size="large"
        onClose={onClose}
        open={open}
      >
        <FormCriarCliente />
      </Drawer>
    </div>
  );
};
