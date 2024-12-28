import { Box, Heading, Text, Flex, Link } from 'theme-ui';
import Image from 'next/image';
export default function PostCard({
  src,
  alt,
  postLink,
  title,
  authorName,
  date,
  onImageClick,
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.thumbnail} onClick={() => onImageClick(postLink)} style={{ cursor: 'pointer' }} >
        <Image src={src} alt={alt} height={300} style={{objectFit: 'cover'}}/>
      </Box>

      <Flex sx={styles.postContent}>
        <Heading sx={styles.title}>
          <Link href={postLink} variant="blog">
            {title}
          </Link>
        </Heading>

        <Flex sx={styles.postFooter}>
          <Text sx={styles.postFooter.name}>{authorName}</Text>
          <Text sx={styles.postFooter.date}>{date}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
const styles = {
  card: {
    backgroundColor: 'white',
    boxShadow: '0px 4px 10px rgba(38,78,118,0.12)',
    borderRadius: '10px',
    m: '0 15px 40px',
    transition: 'all 0.3s',
    width: '330px', // Largeur fixe pour uniformiser les cartes
    height: '430px', // Hauteur fixe pour uniformiser les cartes
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      boxShadow: '0px 5px 20px rgba(38,78,118,0.15)',
    },
  },
  thumbnail: {
    borderRadius: '7px 7px 0 0',
    overflow: 'hidden',
    height: '500px', // Taille fixe pour l'image
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover', // Maintient les proportions de l'image
    },
  },
  postContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: ['15px 20px', '25px 30px'],
    flex: 1, // Permet d'adapter le contenu à la hauteur définie
  },
  title: {
    fontSize: [3, null, null, null, null, 4],
    textAlign: 'center', // Centre le texte du titre
    color: 'heading',
    lineHeight: [1.4, 1.5],
    fontWeight: 700,
    mb: [3, 4, 5],
  },
  postFooter: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    mt: 'auto', // Aligne le footer en bas
    name: {
      fontSize: ['14px', null, 2],
      fontWeight: 500,
      color: 'primary',
      lineHeight: 1.4,
    },
    date: {
      fontSize: ['14px', null, 2],
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
};
