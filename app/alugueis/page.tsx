import { CriarAluguel } from "@/src/components/criarAluguel";
import { TabelaAlugueis } from "@/src/components/tabelaAlugueis";

const Rents = () => {

  return (<div className="p-4">
    <CriarAluguel />
    <TabelaAlugueis />
  </div>);
}

export default Rents;