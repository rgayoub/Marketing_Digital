import { Box, Button, Heading, Text } from 'theme-ui';
import { FaInstagram } from 'react-icons/fa'; // Importation de l'icône Instagram

export default function Subscribe() {
  return (
    <Box sx={styles.contentBox}>
      <Box sx={styles.contentBoxInner}>
        <Heading as="h2" sx={styles.title}>
          Rejoignez notre communauté
        </Heading>
        <Text as="p" sx={styles.description}>
          Abonnez-vous à notre blog pour recevoir des mises à jour sur nos nouveaux designs, créations visuelles, et bien plus encore. Ne manquez rien de notre aventure créative !
        </Text>
        
        {/* Bouton "Subscribe" avec icône Instagram */}
        <Button
          sx={styles.subscribeBtn}
          onClick={() => window.open('https://www.instagram.com/herdeesigner', '_blank')}
        >
          <FaInstagram sx={styles.icon} /> Abonnez-vous
        </Button>
      </Box>
    </Box>
  );
}

const styles = {
  contentBox: {
    backgroundColor: 'rgba(153, 102, 0, 0.57)',
    textAlign: 'center',
    borderRadius: 12,
    py: ['40px', '50px', '60px'],
    px: [3, 4],
    margin: '10px',
    boxShadow: '0px 10px 20px #b7934c',
    transition: 'all 0.3s ease-in-out',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh', // Centre verticalement
  },
  contentBoxInner: {
    width: ['90%', '85%', '75%', '70%'],
    mx: 'auto',
    px: [2, 3, 4],
  },
  title: {
    fontSize: ['28px', '32px', '36px'],
    color: '#fff', // Titre blanc
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '-0.5px',
    mb: 3,
    lineHeight: 1.2,
  },
  description: {
    fontSize: ['15px', '16px', '17px'],
    color: '#f5f5f5', // Gris clair pour la description
    lineHeight: 1.8,
    mb: 4,
    maxWidth: '600px',
    mx: 'auto',
  },
  subscribeBtn: {
    background: 'linear-gradient(135deg, #fff, #f5e8dc)', // Dégradé blanc et beige
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
    margin: '0 auto', // Centre horizontalement
    position: 'relative',
    overflow: 'hidden', // Nécessaire pour l'animation
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)', // Ombre élégante
    transition: 'all 0.4s ease', // Transitions fluides
    textAlign: 'center',
    zIndex: 1,
  
    // Effets au survol
    '&:hover': {
      background: 'linear-gradient(135deg, #f5e8dc, #fff)', // Inversion du dégradé
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
      background: 'radial-gradient(circle, rgba(245, 232, 220, 0.4), transparent 70%)',
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
      background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(245, 232, 220, 0.3))',
      transform: 'translateX(-100%)',
      zIndex: 0,
      transition: 'all 0.4s ease',
    },
    '&:hover:after': {
      transform: 'translateX(100%)',
    },
  },
  icon: {
    fontSize: '24px', // Taille de l'icône
    color: '#3e2723', // Couleur de l'icône
  },
};
