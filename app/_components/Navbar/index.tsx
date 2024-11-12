'use client'
import { Col, Menu, MenuProps, Row } from "antd";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type Props = { children: ReactNode };
export const Navbar = ({ children }: Props) => {
  const router = useRouter();

  const items: MenuProps["items"] = [
    {
      key: "/",
      label: "Livros",
    },
    {
      key: "clientes",
      label: "Clientes",
    },
    {
      key: "alugueis",
      label: "Alugueis",
    },
  ];
  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key === "logout") {
      router.push("/");
    } else {
      router.push(`/${e.key}`);
    }
  };
  return (
    <div>
      <Row>
        <Col span={24}>
          <Menu mode="horizontal" items={items} onClick={onClick} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>{children}</Col>
      </Row>
    </div>
  );
};
