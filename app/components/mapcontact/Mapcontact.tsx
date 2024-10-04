// components/map/MapContact.tsx

import React from 'react';

const MapContact: React.FC = () => {
  return (
    <div id="contact-us" className="flex flex-col md:flex-row w-full justify-between items-center bg-white p-10">
      {/* Informações de Contato */}
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center text-center">
        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
        <p className="mt-2">Email: <span className="font-medium">contact@example.com</span></p>
        <p className="mt-2">
          Address: <span className="font-medium">Av. Tancredo Neves, 6731 - Jardim Itaipu, Foz do Iguaçu - PR</span>
        </p>
        <p className="mt-2">
          Block & Room: <span className="font-medium">Bloco 7, Espaço 1, Sala 5</span>
        </p>
        <p className="mt-2">Phone: <span className="font-medium">+1 234 567 890</span></p>
      </div>

      {/* Mapa do Laboratório */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-lg font-semibold mb-2 text-center">Our Laboratory Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096313!2d-54.57059258555569!3d-25.52337848393937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d0376bcf11e0c9%3A0x154118f3ca0cf3e9!2sAv.%20Tancredo%20Neves%2C%206731%20-%20Jardim%20Itaipu%2C%20Foz%20do%20Igua%C3%A7u%20-%20PR%2C%2058867-900%2C%20Brasil!5e0!3m2!1sen!2sus!4v1696389072412!5m2!1sen!2sus"
          width="100%"
          height="300" // Mantendo a altura para deixá-lo mais quadrado
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
        {/* Adicionando um marcador */}
        <div className="mt-2 text-center text-sm">
          <p>Marker: Av. Tancredo Neves, 6731 - Bloco 7, Espaço 1, Sala 5</p>
        </div>
      </div>
    </div>
  );
};

export default MapContact;
