import Link from 'next/link';

// Simulação de carregamento do arquivo JSON
interface Publication {
  citation: string; // Adicionando a citação
  link: string;
  date: string;
}

const publicationsData: Publication[] = [
  {
    citation: "BUENO, Y. R. G. M. ; NADAI, B. L. ; SCHAEFER, R. L. ; MALETZKE, A.G. . Armadilha inteligente para a captura e monitoramento de vetores de doenças usando inteligência artificial (EN: Quantifying Mosquitoes Using Smartphones and Artificial Intelligence). In: 9º EAICTI - Encontro Anual de Iniciação Científica, Tecnológica e Inovação: Mulheres na Ciência, 2023. Anais do 9º EAICTI - Encontro Anual de Iniciação Científica, Tecnológica e Inovação: Mulheres na Ciência, 2023.",
    link: "https://example.com/research-paper-a",
    date: "2023-03-15",
  },
  {
    citation: "AUTOR B. Título do Paper B. Ano. Detalhes sobre a publicação.",
    link: "https://example.com/research-paper-b",
    date: "2024-01-10",
  },
  {
    citation: "AUTOR C. Título do Paper C. Ano. Detalhes sobre a publicação.",
    link: "https://example.com/research-paper-c",
    date: "2024-05-22",
  },
  {
    citation: "AUTOR TESTE. Título do Teste. Ano. Detalhes sobre a publicação.",
    link: "https://example.com/test",
    date: "2021-05-22",
  },
  {
    citation: "AUTOR TESTE. Título do Teste. Ano. Detalhes sobre a publicação.",
    link: "https://example.com/test",
    date: "2021-05-22",
  },
  {
    citation: "AUTOR TESTE. Título do Teste. Ano. Detalhes sobre a publicação.",
    link: "https://example.com/test",
    date: "2024-05-22",
  },
  {
    citation: "AUTOR TESTE. Título do Teste. Ano. Detalhes sobre a publicação.",
    link: "https://example.com/test",
    date: "2023-05-22",
  },
];

// Função para agrupar publicações por ano
const groupByYear = (publications: Publication[]) => {
  return publications.reduce((acc, publication) => {
    const year = new Date(publication.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(publication);
    return acc;
  }, {} as Record<number, Publication[]>);
};

export default function Publications() {
  const groupedPublications = groupByYear(publicationsData);
  
  // Ordenando os anos em ordem decrescente
  const sortedYears = Object.keys(groupedPublications).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="container mx-auto p-2 my-36 min-h-screen">
      {sortedYears.map((year) => (
        <div key={year} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{year}</h2>
          <div className="flex flex-col gap-4">
            {groupedPublications[Number(year)].map((publication: Publication, index: number) => (
              <div key={index} className="border bg-white rounded-lg shadow-md p-4">
                <Link href={publication.link} className="text-base font-normal mb-2 hover:underline">
                  {publication.citation}
                </Link>{/* Mostrando a citação */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
