
import { Container, Box, Button } from 'theme-ui';
import BannerImage from 'assets/lahyn3al.jpg';

export default function Banner() {
  return (
    <Box sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.overlay} >
          <Box sx={{width: '40%' , textAlign: 'center' , fontSize: ['6px','auto','auto','10px','21px'], fontWeight: '600', marginBottom: '20px', fontFamily: 'sans serif'}}>
          <h1>Transformez votre vision en succès digital</h1>
          </Box>
          <Box sx={{width: '40%' , textAlign: 'center' , fontSize:['6px','auto','auto','13px', '25px'], fontWeight: '500', marginBottom: '20px', fontFamily: 'sans serif'}}>
          <p>de la création à l'exécution, nous offrons des solutions innovantes pour répondre à vos objectifs digitaux et maximiser vos résultats.</p>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'center', width: '40%'}}>
          <Button
            sx={{
              background: 'linear-gradient(135deg, #fff, #b7934c)', // Dégradé blanc et doré
              color: '#3e2723', // Texte marron foncé
              fontSize: ['14px', '16px'],
              fontWeight: '600',
              borderRadius: '50px',
              display: 'inline-flex', // Pour centrer l'icône et le texte
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden', // Nécessaire pour l'animation
              boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)', // Ombre élégante
              transition: 'all 0.4s ease', // Transitions fluides
              textAlign: 'center',
              zIndex: 1,
              width: '60%',
              "@media screen and (max-width: 500px)": {
                fontSize: "8px",
                padding: 1,
                marginBottom: '80px',
              },
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
              display: 'block', // Assure que le bouton est un bloc pour être centré
              marginBottom: '50px',
            }}
            onClick={() => {
              const element = document.getElementById('feature');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Découvrir nos services
          </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  banner: {
    pt: ['130px', '120px', '130px', '140px', null, '150px'], // Padding top
    pr: 6, // Padding right
    position: 'relative',
    zIndex: 2,
    height: '100vh', // Hauteur de la bannière
    backgroundImage: `url(${BannerImage.src})`, // Définir l'image en arrière-plan
    backgroundSize: 'cover', // Ajuster l'image pour qu'elle soit complètement visible sans découpe
    backgroundPosition: 'center center', 
    backgroundRepeat: 'no-repeat', // Ne pas répéter l'image
    "@media screen and (max-width: 330px)": {
      height: "15vh", 
    }, 
    "@media screen and (max-width: 500px)": {
      height: "40vh", 
    },
    "@media screen and (max-width: 416px)": {
      height: "35vh", 
    },
    "@media screen and (max-width: 431px)": {
      height: "36vh", 
    },
    "@media screen and (width: 1024px) and (height: 600px)": {
      height: "110vh", 
    },
    "@media screen and (width: 1280px) and (height: 800px)": {
      height: "80vh", 
    },
    "@media screen and (width: 768px) and (height: 1024px)": {
      height: "36vh", 
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      float: 'left',

    },
    overlay: {
      position: 'relative',
      zIndex: 2,
      color: 'white',
    },
  },
};
