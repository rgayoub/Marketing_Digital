import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; 
import '../styles/animations.css'; // Chemin vers le fichier CSS

const WhatsAppIcon = () => {
    const handleWhatsAppClick = () => {
        const whatsappNumber = "221779200000"; // Remplacez par votre numéro WhatsApp
        window.open(`https://wa.me/${whatsappNumber}`, "_blank");
    };

    return (
        <div onClick={handleWhatsAppClick} className="icon-container icon-whatsapp">
            <FaWhatsapp size={30} color="white" />
        </div>
    );
};

export default WhatsAppIcon;
