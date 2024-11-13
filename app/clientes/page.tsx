import { CriarCliente } from "@/src/components/criarCliente";
import { TabelaClientes } from "@/src/components/tabelaClientes";

const Clientes = () => {
  return (
    <div className="p-4">
      <CriarCliente />
      <TabelaClientes />
    </div>
  );
};

export default Clientes;
