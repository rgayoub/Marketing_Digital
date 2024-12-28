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
          onClick={() => window.open('https://www.instagram.com/herdeesigner?igsh=bHdxaDV6dmgzamty', '_blank')}
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
    boxShadow: '0px 10px 20px #b7934c', // Ombre subtile
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: 'rgba(153, 102, 0, 0.57)', 
    },
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
    backgroundColor: '#fff',  // Bouton blanc
    color: 'black', // Texte marron foncé
    py: '14px',
    px: '30px',
    fontSize: ['16px', '18px'],
    fontWeight: '600',
    borderRadius: '50px',
    letterSpacing: '1px',
    display: 'flex', // Permet d'aligner l'icône et le texte
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px', // Espacement entre l'icône et le texte
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#f5f5f5', // Effet de survol gris clair
      color: '#3e2723',
      transform: 'scale(1.05)', // Effet de mise en valeur au survol
    },
  },
  icon: {
    fontSize: '24px', // Taille de l'icône
    color: '#3e2723', // Couleur de l'icône
  },
};
