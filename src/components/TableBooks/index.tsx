"use client";
import { LivroResponse } from "@/src/shared/types/Response/Livros";
import { useEffect, useState } from "react";
import { getLivros } from "./actions";
import { Table, TableProps } from "antd";

type Props = {};
export const TableLivros = ({}: Props) => {
  const [livros, setLivros] = useState<LivroResponse["data"]>([]);
  useEffect(() => {
    (async () => {
      const response = await getLivros();
      setLivros(response.data.data);
    })();
  }, []);

  
  const columns: TableProps<LivroResponse['data'][0]>['columns'] = [
    {
      title:"ID",
      key:"id"
    },
    {
      title:"Autor",
      key:"autor"
    }
  ]

  return (
    <div>
      <div>
      </div>
      <Table<LivroResponse['data'][0]> columns={columns} dataSource={livros} />
    </div>
  );
};
