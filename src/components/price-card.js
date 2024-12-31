import React, { useState } from 'react';
import { Box, Card, Text, Heading, Button } from 'theme-ui';
import List from './list';
import Modal from 'react-modal';

export default function PriceCard({
  data: {
    header,
    name,
    description,
    priceWithUnitMad,
    priceWithUnitEuro,
    priceWithUnitFcfa,
    buttonText = 'Start Free Trial',
    points,
    descrip,
  },
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Card
        className={header ? 'package__card active' : 'package__card'}
        sx={styles.pricingBox}
      >
        {header && <Text sx={styles.header}>{header}</Text>}
        <Box>
          <Box className="package__header" sx={styles.pricingHeader}>
            <Heading className="package__name" variant="title">
              {name}
            </Heading>
            <Text as="p">{description}</Text>
          </Box>
          <List items={points} childStyle={styles.listItem} />
          <Text className="package__price" sx={styles.price}>
            <Box className="price-item" sx={styles.priceItem}>
              <Text as="span" className="currency">MAD:</Text> {priceWithUnitMad}
            </Box>
            <Box className="price-item" sx={styles.priceItem}>
              <Text as="span" className="currency">EURO:</Text> {priceWithUnitEuro}
            </Box>
            <Box className="price-item" sx={styles.priceItem}>
              <Text as="span" className="currency">FCFA:</Text> {priceWithUnitFcfa}
            </Box>
            <span>/Par mois</span>
          </Text>
          <Button
            onClick={openModal}
            sx={{
              background: 'linear-gradient(135deg, #fff, #b7934c)', // Dégradé blanc et doré
              color: '#3e2723', // Texte marron foncé
              py: '14px',
              px: '30px',
              fontSize: ['16px', '18px'],
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
            {buttonText}
          </Button>
        </Box>
      </Card>

      {/* Modal Popup */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Modal Description"
        ariaHideApp={false}
      >
        <Box sx={styles.modalContent}>
           {/* Bouton de fermeture "X" */}
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
          <Heading as="h3" sx={{ color: '#b7934c', marginBottom: '20px' , textShadow: '1px 1px 1px black' , fontFamily: 'Georgia' }}>
            Informations sur le pack
          </Heading>
          <Text sx={{ color: '#555', marginBottom: '20px' }}>
          {descrip}
          </Text>
          <Button
            as="a"
            href="https://wa.me/221779200000" 
            target="_blank"
            rel="noopener noreferrer"
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
              width: '300px',
              
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
            Contacter sur WhatsApp
          </Button>
        </Box>
      </Modal>
    </>
  );
}

const styles = {

  pricingBox: {
    borderRadius: 20,
    position: 'relative',
    transition: 'all 0.3s',
    p: ['35px 25px', null, null, '40px'],
    width: ['100%', '75%', '100%'],
    mb: '40px',
    mt: '40px',
    mx: [0, 'auto', 0],
    '&:before': {
      position: 'absolute',
      content: "''",
      width: '100%',
      top: 0,
      left: 0,
      height: '100%',
      border: '2px solid rgba(38, 78, 118, 0.1)',
      borderRadius: 'inherit',
      transition: 'all 0.3s',
      zIndex: -1,
    },
    '&:hover': {
      boxShadow: '0px 4px 25px rgba(38, 78, 118, 0.1) !important',
      '&:before': {
        opacity: 0,
      },
    },
  },
  header: {
    height: ['28px', null, null, '32px'],
    backgroundColor: 'yellow',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: 1,
    lineHeight: 1.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    position: 'absolute',
    top: '-17px',
    letterSpacing: '-.14px',
    px: '12px',
  },
  pricingHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: ['30px', null, null, null, '40px'],
    p: {
      fontSize: [1, 2],
      color: 'text',
      lineHeight: 'heading',
    },
    '.package__name': {
      marginBottom: [1, null, 2],
    },
  },
  price: {
    fontWeight: 500,
    fontSize: ['18px', '20px', '22px'],
    lineHeight: 1.2,
    letterSpacing: '-0.55px',
    color: '#2c3e50',
    marginBottom: 2,
    display: 'flex',
    flexDirection: 'column',  
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    pt: [3, 4],
    '> span': {
      position: 'relative',
      pl: '3px',
      display: 'inline-block',
      color: 'rgb(174, 174, 174)',
      fontSize: [1, 2],
      fontWeight: '500',
      fontStyle: 'italic',
    },
    '> .price-item:not(:last-of-type)': {
    borderBottom: '1px solid #bdc3c7', // Gris clair pour la séparation
    mb: '15px',
    pb: '10px',
  },
  },
  priceItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: [2, 3],
    mb: 2,
    color: '#555',
    width: '100%',
    '.currency': {
      fontWeight: 'bold',
      color: '#b7934c',
      mr: 2,
    },
    perMonth: {
      display: 'block',
      marginTop: '15px',
      fontSize: ['14px', '16px'],
      color: '#bdc3c7',  // Gris clair pour le texte supplémentaire
      fontStyle: 'italic',
    },
  },
  
  listItem: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: [1, 2],
    lineHeight: [1.75, 1.6],
    mb: 3,
    alignItems: 'flex-start',
    color: 'text',
    '&.closed': {
      opacity: 0.55,
      button: {
        color: '#b7935a',
      },
    },
  },
  modalContent: {
    padding: '20px',
    textAlign: 'center',
    background: '#fff',
    borderRadius: '10px',
  },
};

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '500px',
    borderRadius: '20px',
    border: 'none',
    padding: 0,
  },
};