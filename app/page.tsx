import { CriarLivro } from "@/src/components/criarLivros";
import { TabelaLivros } from "@/src/components/TabelaLivros";

export default function Home() {
  return (
    <main className="p-12">
      <CriarLivro />
      <TabelaLivros />
    </main>
  );
}
