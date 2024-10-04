'use client';

import Link from 'next/link';
import Coen from "./Coen";

export const Index = () => {
    const smoothScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex w-full flex-col items-center justify-center h-screen text-center">
            <Coen />

            <div className="mt-20 space-y-4 w-full flex flex-col items-center">
                <Link 
                    className="bg-white text-black font-semibold py-1 px-4 rounded-full transition-transform duration-300 transform hover:scale-105 w-1/2 sm:w-1/4 md:w-1/6 lg:w-1/8" 
                    href="/projects"
                >
                    Projects
                </Link>
                <button 
                    className="bg-reduni text-white font-semibold py-1 px-4 rounded-full transition-transform duration-300 transform hover:scale-105 w-1/2 sm:w-1/4 md:w-1/6 lg:w-1/8 mt-4"
                    onClick={() => smoothScroll('contact-us')} // Chamando a função de rolagem suave
                >
                    Contact
                </button>
            </div>
        </div>
    );
}
