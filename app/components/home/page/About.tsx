import Image from "next/image";

export const About = () => {
    return (
        <div className="flex flex-col w-[100%] mt-20 md:flex-row justify-around text-left space-y-4 md:space-y-0 p-20 bg-white rounded-lg mx-auto shadow-2xl">
            <div className="md:w-1/3">
                <h1 className="text-6xl font-normal">About Coen</h1>
                <p className="text-2xl mt-20 text-gray-700 text-pretty">
                    The Computational Entomology Lab (COEN) at Unioeste, located in Foz do Iguaçu, applies machine learning to solve practical and academic problems, focusing on data analysis and automation.
                </p>
            </div>
            <div className="mt-8 md:mt-0">
                <Image
                    src="/images/photo5.jpg" // Certifique-se de que o caminho para a imagem esteja correto
                    alt="Lab picture"
                    width={650} // Ajuste conforme necessário
                    height={0} // Ajuste conforme necessário
                    className="rounded-lg shadow-2xl object-cover"
                />
            </div>
        </div>
    );
};
