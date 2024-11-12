"use client";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Row } from "antd";
import { useState } from "react";
import { FormCriarLivro } from "../FormCriarLivro";

type Props = {};
export const CriarLivro = ({}: Props) => {
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
            Adicionar Livro
          </Button>
        </Col>
      </Row>
      <Drawer title="Cadastar livro" size="large" onClose={onClose} open={open}>
        <FormCriarLivro />
      </Drawer>
    </div>
  );
};
