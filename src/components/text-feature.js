import { Box, Heading, Text, Button, Link } from 'theme-ui';



export default function TextFeature({
  subTitle,
  title,
  description,
  btnName,
  btnURL = '',
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.wrapper}>
        <Text as="p" sx={styles.wrapper.subTitle}>
          {subTitle}
        </Text>
        <Heading as="h2" sx={styles.wrapper.title}>
          {title}
        </Heading>
      </Box>

      {description && (
        <Text as="p" className="description" sx={styles.description}>
          {description}
        </Text>
      )}

      {btnName && (
        <Link href={btnURL} variant="default">
          <Button sx={styles.button} aria-label={btnName}>
            {btnName}
          </Button>
        </Link>
      )}
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 0,
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: -1,
    subTitle: {
      fontSize: [1, null, 2],
      color: '#6F4F37',  // Couleur marron pour le sous-titre
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: [2, 3],
      letterSpacing: ['2px', null, '3px'],
    },
    title: {
      fontSize: ['28px', '32px', '36px', '40px'],
      color: '#000000',  // Couleur noire pour le titre
      lineHeight: 1.2,
      fontWeight: '700',
      letterSpacing: '-.5px',
      mb: 5,
    },
  },
  description: {
    fontSize: ['16px', '17px', '18px'],
    fontWeight: 400,
    lineHeight: 2,
    color: '#000000',  // Couleur noire pour la description
    mb: '30px',
  },
  button: {
    backgroundColor: '#b7934c',  // Couleur marron pour le bouton
    color: 'white',  // Couleur du texte du bouton (blanc)
    padding: '10px 20px',
    borderRadius: '5px',
    fontWeight: '700',
    '&:hover': {
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', // Ombre douce au survol
      transform: 'translateY(-2px)', // Légère élévation du bouton au survol
    },
  },
};
