import { Box, Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,   
    altText: 'Design',
    title: 'Design',
    text: 'Créez des visuels attrayants et professionnels pour votre marque.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Création de contenu',
    title: 'Création de contenu',
    text: 'Développez du contenu unique et engageant pour vos projets.',
  },

  {
    id: 4,
    imgSrc: Subscription,
    altText: 'Community Management',
    title: 'Community Manager',
    text: 'Gérez votre communauté en ligne et créez des interactions.',
  },
  {
    id: 5,
    imgSrc: Support,
    altText: 'Production audiovisuelle',
    title: 'Production audiovisuelle',
    text: 'Produisez des vidéos professionnelles pour votre communication.',
  },
];
export default function KeyFeature() {
  return (
    <Box sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
      <SectionHeader
  slogan="Nos Services"
  title="Découvrez nos services exceptionnels"
  sx={{
    textAlign: 'center', // Centrer le texte
    marginBottom: '60px', // Plus d'espace en bas

    // Style du slogan
    subTitle: {
      fontSize: [1, null, 2], // Taille dynamique
      color: '#6F4F37',  // Couleur marron pour le sous-titre
      textTransform: 'uppercase', // Texte en majuscules
      fontWeight: '700', // Poids de la police plus épais
      mb: [2, 3], // Marges dynamiques
      letterSpacing: ['2px', null, '3px'], // Espacement entre les lettres
    },

    // Style du titre
    title: {
      color: '#1d1d1d', // Couleur de texte plus foncée
      fontSize: ['28px', '34px', '40px'], // Taille dynamique pour une meilleure réactivité
      fontWeight: '800', // Titre en gras pour plus d'impact
      letterSpacing: '-0.5px', // Réduire légèrement l'espacement des lettres pour plus de densité
      lineHeight: 1.4, // Ajuster la hauteur de ligne pour rendre le titre plus aéré
    },
  }}
/>




        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};