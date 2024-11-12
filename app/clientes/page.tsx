import { CriarCliente } from "@/src/components/criarCliente";
import { TabelaClientes } from "@/src/components/tabelaClientes";

const Clientes = () => {
  return (
    <div className="p-12">
      <CriarCliente />
      <TabelaClientes />
    </div>
  );
};

export default Clientes;
