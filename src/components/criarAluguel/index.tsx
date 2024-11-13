'use client'
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Row } from "antd";
import { useEffect, useState } from "react";
import { FormCriarAluguel } from "../formCriarAluguel";

type Props = {}
export const CriarAluguel = ({ }: Props) => {
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
                        Cadastrar aluguel
                    </Button>
                </Col>
            </Row>
            <Drawer title="Cadastrar aluguel" size="large" onClose={onClose} open={open}>
                <FormCriarAluguel />
            </Drawer>
        </div>
    )
};