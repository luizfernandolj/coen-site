import Image from "next/image";

export const Logo = () => {
    return (
        <div className="flex items-center space-x-4">
            <Image
            src="/unieste.png"
            alt="Logo Unioeste"
            width={70}
            height={60}
            />
            <Image
            src="/LOGO-COEN.png"
            alt="Logo COEN"
            width={120}
            height={30}
            />
        </div>
    );
};