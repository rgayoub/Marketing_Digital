import { Container, Box, Heading, Text, Button } from 'theme-ui';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';



export default function Banner() {
  return (
    <Box sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
        <Heading as="h1" variant="heroPrimary" sx={{ color: 'black' }}>
        Transformez Votre Vision En Succès Digital
      </Heading>
      <Text as="p" variant="heroSecondary" sx={{ color: 'black' }}>
        De la création à l'exécution, nous offrons des solutions innovantes pour répondre à vos objectifs digitaux et maximiser vos résultats.
      </Text>
          <Button
  variant="primary"
  sx={{
    borderRadius: '45px',
    fontWeight: 'bold',
    padding: '15px 30px',
    backgroundColor: '#b7934c',
    '&:hover': {
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', // Ombre douce au survol
      transform: 'translateY(-2px)', // Légère élévation du bouton au survol
    },
  }}
  onClick={() => {
    window.scrollTo({
      top: document.getElementById('feature').offsetTop,
      behavior: 'smooth',
    });
  }}
>
  Découvrir nos services
</Button>




          
        </Box>

        <Box sx={styles.banner.imageBox}>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: '-80px',
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft.src})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '25%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '-20px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight.src})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '25%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
  
  buttons: {
    primary: {
      variant: 'buttons.defaultBtn',
      color: 'white',  // Texte du bouton en blanc
      bg: '#6a4e23',  // Couleur de fond initiale (marron)
      '&:hover': {
        bg: '#4e2f12',  // Nouveau fond marron plus foncé au survol
        color: '#fff',   // Assurez-vous que le texte reste en blanc
        boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px',
      },
    },
  },
};
