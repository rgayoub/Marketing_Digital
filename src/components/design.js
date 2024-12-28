import React from 'react';

const WebsiteDesign = () => {
    return (
        <div className="website-design">
            <style jsx>{`
                .website-design {
                    background: black; /* Fond dégradé */
                    color: white;
                    padding: 40px;
                    padding-top: 80px; /* Espace entre la navbar et le contenu */
                    min-height: 100vh; /* Prend toute la hauteur de l'écran */
                }



                
               .header {
    text-align: center;
    padding: 60px 20px;
    background-color: #fff; /* Fond blanc pour un look propre et moderne */
    border-radius: 10px; /* Coins arrondis pour un effet plus moderne */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Ombre douce pour ajouter de la profondeur */
    margin-bottom: 50px;
}

.header h1 {
    font-size: 3rem; /* Taille du texte assez grande pour capter l'attention */
    font-weight: bold; /* Texte en gras pour plus d'impact */
    color: #3e2723; /* Marron foncé pour le titre */
    margin-bottom: 20px;
    text-transform: uppercase; /* Majuscules pour ajouter de la structure */
    letter-spacing: 3px; /* Espacement des lettres pour une meilleure lisibilité */
    line-height: 1.4;
}

.header p {
    font-size: 1.25rem; /* Taille confortable pour la lecture */
    color: #333; /* Texte noir/gris foncé pour une bonne lisibilité */
    line-height: 1.8;
    max-width: 900px; /* Limite de la largeur pour garder un bon format de lecture */
    margin: 0 auto; /* Centrer le texte */
}

@media (max-width: 768px) {
    .header {
        padding: 40px 15px; /* Moins de padding pour les petits écrans */
    }

    .header h1 {
        font-size: 2.5rem; /* Réduction de la taille du texte pour les petits écrans */
    }

    .header p {
        font-size: 1rem; /* Ajustement de la taille du texte sur mobile */
    }
}



.gallery {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Colonne responsive */
                    gap: 30px; /* Espacement horizontal et vertical entre les images */
                    padding: 20px; /* Ajout de padding autour de la galerie */
                }
                .gallery img {
                    width: 100%;
                    height: auto;
                    border-radius: 15px;
                    object-fit: cover;
                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
                }
                .gallery img:hover {
                    transform: scale(1.1); /* Zoom progressif au survol */
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.5);
                }
                @media (max-width: 768px) {
                    .header h1 {
                        font-size: 2.5rem;
                    }
                    .header p {
                        font-size: 1.25rem;
                    }
                    .gallery {
                        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Ajustement pour les petits écrans */
                        gap: 20px; /* Réduction de l'espacement sur mobile */
                    }
                }
            `}</style>
            <div className="header">
                <h1>Nos Réalisations <br />Design et Créations Visuelles</h1>
                <p>
        Explorez notre collection unique de designs, d'affiches animées et statiques, 
        ainsi que de logos conçus pour dynamiser votre image
    </p>
            </div>

            <div className="gallery">
                <img src="/images/design/design1.jpeg" alt="Design 1" />
                <img src="/images/design/design2.jpeg" alt="Design 2" />
                <img src="/images/design/design3.jpeg" alt="Design 3" />
                <img src="/images/design/design4.jpeg" alt="Design 4" />
                <img src="/images/design/design5.jpeg" alt="Design 5" />
                <img src="/images/design/image1.jpeg" alt="Image 1" />
                <img src="/images/design/logo.jpeg" alt="Design 6" />
                <img src="/images/design/image2.jpeg" alt="Image 2" />
                <img src="/images/design/image4.jpeg" alt="Image 4" />
                <img src="/images/design/image5.jpeg" alt="Image 5" />
                <img src="/images/design/image6.jpeg" alt="Image 6" />
                <img src="/images/design/image3.jpeg" alt="Image 3" />
                <img src="/images/design/image7.jpeg" alt="Image 7" />
                <img src="/images/design/image8.jpeg" alt="Image 8" />
                <img src="/images/design/image9.jpeg" alt="Image 9" />
                <img src="/images/design/image10.jpeg" alt="Image 10" />
                <img src="/images/design/image11.jpeg" alt="Image 11" />
                <img src="/images/design/image12.jpeg" alt="Image 12" />
                <img src="/images/design/image13.jpeg" alt="Image 13" />
                <img src="/images/design/image14.jpeg" alt="Image 14" />
                <img src="/images/design/image15.jpeg" alt="Image 15" />
                <img src="/images/design/image17.jpeg" alt="Image 17" />
            </div>
        </div>
    );
}

export default WebsiteDesign;
