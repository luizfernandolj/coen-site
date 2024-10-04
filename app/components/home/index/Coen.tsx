// Coen.tsx
'use client';

import Image from "next/image";
import { useState } from "react";

const Coen = () => {
    const [hoveredLetter, setHoveredLetter] = useState<'C' | 'O' | 'Image' | 'N' | null>(null);

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center items-center space-x-1">
                <h1
                    className={`text-9xl font-bold text-white font-normal transition-transform duration-300 transform ${hoveredLetter === 'C' ? 'translate-y-[-3px]' : ''}`}
                    onMouseEnter={() => setHoveredLetter('C')}
                    onMouseLeave={() => setHoveredLetter(null)}
                >
                    C
                </h1>
                <h1
                    className={`text-9xl font-bold text-white font-normal transition-transform duration-300 transform ${hoveredLetter === 'O' ? 'translate-y-[-5px]' : ''}`}
                    onMouseEnter={() => setHoveredLetter('O')}
                    onMouseLeave={() => setHoveredLetter(null)}
                >
                    O
                </h1>
                <Image
                    src="/coen.svg"
                    alt="Logo Unioeste"
                    width={90}
                    height={90}
                    className={`transition-transform duration-300 transform ${hoveredLetter === 'Image' ? 'translate-y-[-4px]' : ''}`}
                    onMouseEnter={() => setHoveredLetter('Image')}
                    onMouseLeave={() => setHoveredLetter(null)}
                />
                <h1
                    className={`text-9xl font-bold text-white font-normal transition-transform duration-300 transform ${hoveredLetter === 'N' ? 'translate-y-[-3px]' : ''}`}
                    onMouseEnter={() => setHoveredLetter('N')}
                    onMouseLeave={() => setHoveredLetter(null)}
                >
                    N
                </h1>
            </div>
            <p className="text-3xl mt-1 text-white font-extralight">
                Computational Entomology Lab
            </p>
        </div>
    );
}

export default Coen; // Exportação padrão
