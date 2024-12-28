import { Container, Box } from 'theme-ui';
import TextFeature from '../components/text-feature';
import FeatureThumb from '../assets/herdesignervideo.mp4'; // Importer le fichier vidéo
import shapePattern from '../assets/shape-pattern2.png';

const data = {
  subTitle: 'Qui sommes-nous',
  title: 'Découvrez notre équipe et notre mission',
  description:
      "Nous sommes une équipe passionnée par ce que nous faisons. Notre mission est de fournir des services de qualité en utilisant les dernières technologies et en apportant une valeur ajoutée à nos clients.",
  btnName: 'Rejoindre-nous',
  btnURL: '/contact',
};

export default function CoreFeature() {
  return (
      <Box sx={{ variant: 'section.coreFeature' }} id="quesommes">
        <Container sx={styles.containerBox}>
          <Box sx={styles.contentBox}>
            <TextFeature
                subTitle={data.subTitle}
                title={data.title}
                description={data.description}
                btnName={data.btnName}
                btnURL={data.btnURL}
            />
          </Box>
          <Box sx={styles.thumbnail}>
            <video
                src={FeatureThumb}
                controls
                style={styles.video}
            />
            <Box sx={styles.shapeBox}>
              {/*<img src={shapePattern} alt="Shape" />*/}
            </Box>
          </Box>
        </Container>
      </Box>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> video': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
      width: '120%', // Ajuster la largeur selon vos besoins
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};