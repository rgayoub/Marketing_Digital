import React from 'react';

const WebsiteDesign = () => {
    return (
        <div className="website-design">
            <style jsx>{`
                .website-design {
                    color: white;
                    background-color: #f5f5f5; /* Fond clair */
                    padding: 20px;
                    padding-top: 80px; /* Espace entre la navbar et le contenu */
                }
                .header {
                    text-align: center;
                    margin-bottom: 20px;
                }
                .header h1 {
                    font-size: 3rem;
                    background: linear-gradient(to bottom, #9b59b6, #00aaff);
                    -webkit-background-clip: text;
                    color: transparent;
                }
                .header p {
                    margin-top: 1rem;
                    font-size: 1.25rem;
                    color: #333; /* Texte sombre */
                }
                .gallery {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 20px;
                }
                .gallery img {
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                    object-fit: cover;
                    transition: transform 0.3s ease-in-out;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                .gallery img:hover {
                    transform: scale(1.60);
                }
            `}</style>
            <div className="header">
                <h1>Website Design <br /> that works</h1>
                <p>Creating, designing and developing websites that work for your business.</p>
            </div>

            <div className="gallery">
                <img src="/images/contenu/design1.jpeg" alt="Design 1" />
                <img src="/images/contenu/design2.jpeg" alt="Design 2" />
                <img src="/images/design/design3.jpeg" alt="Design 3" />
                <img src="/images/design/design4.jpeg" alt="Design 4" />
                <img src="/images/design/design5.jpeg" alt="Design 5" />
                <img src="/images/design/logo.jpeg" alt="Design 6" />
            </div>
        </div>
    );
}

export default WebsiteDesign;
