import { Box, Container, Text , Heading , Button} from 'theme-ui';
import { Link } from 'react-scroll';
import data from './footer.data';
import FooterLogo from 'assets/logoHerDesigner.png';
import Image from 'next/image';
import { Link as Link2 } from 'components/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import React, { useState } from "react";
import Modal from 'react-modal';

export default function Footer() {
 const [isModalOpen, setIsModalOpen] = useState(false);
  const [nom, setNom] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false); // État pour gérer l'affichage d'alerte

  // Ouvrir et fermer le modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleSend = () => {
    if (nom.trim() && message.trim()) {
      const phoneNumber = "221779200000"; 
      const url = `https://wa.me/${phoneNumber}?text=Bonjour,%20c'est%20${encodeURIComponent(
        nom
      )}%20.%0A${encodeURIComponent(message)}`;
      window.open(url, "_blank");
      window.location.href = "/";
    } else {
      setShowAlert(true); // Affiche le modal si les champs sont vides
    }
  };
  const closeAlert = () => {
    setShowAlert(false); // Ferme le modal
  };

  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Link2 path="/">
            <Image src={FooterLogo} alt="Logo" width={270} />
          </Link2>

          <Box sx={styles.footer.expressiveText}>
            "Nous transformons vos idées en réalité visuelle et numérique, avec passion et créativité"
          </Box>

          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map(({ path, label }, i) => (
                label === "Accueil" ? (
                  <a
                    key={i}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/";
                    }}
                    className="accueil"
                    style={{ cursor: "pointer", color: "black", marginRight: "20px", marginBottom: "20px" }}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    activeClass="active"
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    key={i} 
                    className={label === "Qui sommes-nous" ? "qui-sommes-nous" :
                      label === "Nos services" ? "nos-services" :
                        label === "Nos réalisations" ? "nos-realisations" : ""}
                    style={{ cursor: "pointer", color: "black", marginRight: "20px", marginBottom: "20px" }}
                  >
                    {label}
                  </Link>
                )
              ))}
              <a
                className="donate__btn"
                onClick={openModal}
                style={{ cursor: "pointer", color: "black", marginRight: "20px", marginBottom: "20px" }}
              >
                Contactez-nous
              </a>
            </nav>
          </Box>

          {/* Section horaire et réseaux sociaux */}
          <Box sx={styles.footer.infoSection}>
            <Text sx={styles.footer.infoText}>Disponible 24/24h</Text>
            <Box sx={styles.footer.socialIcons}>
              <a href="https://wa.me/221779200000" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={24} style={styles.footer.icon} />
              </a>
              <a href="https://www.instagram.com/herdeesigner" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} style={styles.footer.icon} />
              </a>
            </Box>
          </Box>

          <Text sx={styles.footer.copyright}>
            HerDESIGNER {new Date().getFullYear()} &copy;
          </Text>
        </Box>
        {/* Modal */}
              <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Formulaire Modal"
                ariaHideApp={false}
              >
                <Box sx={styles.modalContent}>
                  <span
                    onClick={closeModal}
                    style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      width: '40px',
                      height: '40px',
                      background: '#b7934c',
                      color: '#fff',
                      fontSize: '24px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      paddingBottom: 3,
                      cursor: 'pointer',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      transition: 'background 0.3s ease, transform 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#a0783b';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#b7934c';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    &times;
                  </span>
                  <Heading as="h3" sx={{ textAlign:'center', color: '#b7934c', marginBottom: '20px' , textShadow: '1px 1px 1px black' , fontFamily: 'Georgia' }}>
                  Contactez notre équipe
                  </Heading>
                  <p style={{ color: 'rgb(174, 174, 174)', fontSize: [1, 2], textAlign: 'center',fontWeight: '500',fontStyle: 'italic' }}>
                                Nous serons ravis de discuter de vos besoins en Marketing Digital.
                    </p>
                  <form style={styles.form}>
                    <Box sx={{ marginBottom: '15px' }}>
                      <label style={styles.label}>Nom</label>
                      <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Entrez votre nom" style={styles.input} />
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                      <label style={styles.label}>Message</label>
                      <textarea placeholder="Votre message" value={message} onChange={(e) => setMessage(e.target.value)} style={{ ...styles.input, height: '100px' }} />
                    </Box>
                    <Button
                                onClick={handleSend}
                                type="button" // Empêche le rechargement de la page
                                sx={{
                                  background: 'linear-gradient(135deg, #fff, #b7934c)', // Dégradé blanc et doré
                                  color: '#3e2723', // Texte marron foncé
                                  py: '14px',
                                  px: '30px',
                                  fontSize: ['14px', '16px'],
                                  fontWeight: '600',
                                  borderRadius: '50px',
                                  letterSpacing: '1px',
                                  display: 'inline-flex', // Pour centrer l'icône et le texte
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '10px', // Espace entre l'icône et le texte
                                  position: 'relative',
                                  overflow: 'hidden', // Nécessaire pour l'animation
                                  boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)', // Ombre élégante
                                  transition: 'all 0.4s ease', // Transitions fluides
                                  textAlign: 'center',
                                  zIndex: 1,
                                  width: '50%',
                                  
                                  // Effets au survol
                                  '&:hover': {
                                    background: 'linear-gradient(135deg, #b7934c, #fff)', // Inversion du dégradé avec la couleur dorée
                                    color: '#3e2723',
                                    transform: 'scale(1.1)', // Zoom léger
                                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', // Ombre plus prononcée
                                  },
                                  
                                  // Animation lumineuse
                                  '&:before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: '-50%',
                                    left: '-50%',
                                    width: '200%',
                                    height: '200%',
                                    background: 'radial-gradient(circle, rgba(183, 147, 76, 0.4), transparent 70%)', // Couleur dorée dans l'animation
                                    transform: 'scale(0)',
                                    transition: 'transform 0.6s ease',
                                    zIndex: -1,
                                  },
                                  '&:hover:before': {
                                    transform: 'scale(1)',
                                  },
                                  
                                  // Animation d'ondes lumineuses
                                  '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(183, 147, 76, 0.3))', // Couleur dorée dans l'animation
                                    transform: 'translateX(-100%)',
                                    zIndex: 0,
                                    transition: 'all 0.4s ease',
                                  },
                                  '&:hover:after': {
                                    transform: 'translateX(100%)',
                                  },
                              
                                  // Centrage du bouton
                                  margin: '0 auto', // Centre horizontalement
                                  display: 'block', // Assure que le bouton est un bloc pour être centré
                                  marginTop: '20px', // Petit espace en haut
                                }}
                              >
                                Envoyer
                              </Button>
                              {/* Modal Alert */}
              {showAlert && (
                <div style={overlayStyle}>
                  <div style={modalStyle}>
                    <h3 style={{ color: "#d9534f" }}>Désolé</h3>
                    <p style={{ color: "#333" }}>Veuillez remplir tous les champs !</p>
                    <button onClick={closeAlert} style={buttonStyle}>Fermer</button>
                  </div>
                </div>
              )}
                  </form>
                </Box>
              </Modal>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '30px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },
    expressiveText: {
      fontSize: "20px", 
      fontWeight: '700',
      textAlign: 'center',
      fontFamily: "Georgia",
      letterSpacing: '1.5px',
      lineHeight: '1.8',
      background: 'linear-gradient(90deg, #ffffff, #d1b48c, #000000)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: '1px 2px 2px rgba(0, 0, 0, 0.2)',
    },
    infoSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mt: 4,
      mb: 3,
    },
    infoText: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#d1b48c',
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      mt: 2,
      a: {
        margin: '0 10px',
        textDecoration: 'none',
      },
    },
    icon: {
      color: '#000000',
      transition: 'color 0.3s',
      ':hover': {
        color: '#d1b48c',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
      color: '#000000',
    },
  },
  modalContent: {
    padding: '20px',
    background: '#fff',
    border:0,
    borderRadius: '10px',
    position: 'relative',
    maxWidth: '500px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '5px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    fontSize: '14px',
    color: '#333',
  },
};

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  content: {
    top: '57%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '500px',
    borderRadius: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    border: 0,
    maxHeight: "81vh", // Limite la hauteur maximale du modal
    overflowY: "auto", // Permet le défilement vertical si le contenu dépasse la hauteur maximale
  },
};
// Styles pour le modal
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2000,
};

const modalStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "300px",
  textAlign: "center",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const buttonStyle = {
  padding: "8px 16px",
  backgroundColor: "#d9534f",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "10px",
};
