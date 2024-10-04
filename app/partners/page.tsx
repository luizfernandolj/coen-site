import Image from 'next/image';
import Link from 'next/link';

// Simulação de carregamento do arquivo JSON (exemplo)
const partnersData = [
  {
    name: "ViaGroup",
    logo: "/companys/viagroup.png", // Deixe como null se não houver imagem
    link: "https://viagroup.com.br"
  },
  {
    name: "Company B",
    logo: null,
    link: "https://www.companyb.com"
  },
  {
    name: "Company B",
    logo: null,
    link: "https://www.companyb.com"
  },
  {
    name: "Company B",
    logo: null,
    link: "https://www.companyb.com"
  },
  {
    name: "Company B",
    logo: null,
    link: "https://www.companyb.com"
  },
  {
    name: "Company B",
    logo: null,
    link: "https://www.companyb.com"
  },
  {
    name: "Company B",
    logo: null,
    link: "https://www.companyb.com"
  },
  {
    name: "Company B",
    logo: null,
    link: "https://www.companyb.com"
  },
  {
    name: "Company B",
    logo: null,
    link: "https://www.companyb.com"
  },
  {
    name: "Company B",
    logo: null,
    link: "https://www.companyb.com"
  },
];

export default function Partners() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-8 mt-20">
      <h1 className="text-4xl font-bold mb-12">Partners</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-screen-lg ">
        {partnersData.map((partner, index) => (
            <Link href={partner.link} key={index} className="block flex justify-center items-center">
            {partner.logo ? (
              <Image
              src={partner.logo}
              alt={`${partner.name} Logo`}
              width={150}
              height={150}
              className="object-contain"
              />
            ) : (
              <div className="bg-reduni w-full h-36 flex items-center justify-center text-white font-bold">
              Logo here
              </div>
            )}
            </Link>
        ))}
      </div>
    </div>
  );
}
