import { Container, Heading, Text, Box } from 'theme-ui';
import Image from 'next/image';
import SectionHeader from 'components/section-header';
import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';

import Avatar1 from 'assets/testimonial/avatar1.png';
import Avatar2 from 'assets/testimonial/avatar2.png';
import Avatar3 from 'assets/testimonial/avatar3.png';
import Avatar4 from 'assets/testimonial/avatar4.png';

const data = [
  {
    id: 1,
    title: 'Design de qualité et créativité',
    description:
      "Offrir des services de design innovants pour rendre vos projets visuellement attrayants et mémorables. Nous nous engageons à transformer vos idées en visuels percutants et modernes.",
    avatar: Avatar2,
    name: 'Ahmed El Amrani',
    designation: '@ahmed.elamrani',
    email: 'ahmed.elamrani@mail.com',
    review: 5,
  },
  {
    id: 2,
    title: 'Création de contenu impactant',
    description:
      "Créer du contenu captivant, engageant et original qui reflète l'image de votre marque et attire l'attention. Nos experts produisent des textes de qualité adaptés à vos besoins spécifiques.",
    avatar: Avatar1,
    name: 'Fatima Zahra Benali',
    designation: '@fatima.z.benali',
    email: 'fatima.z.benali@mail.com',
    review: 5,
  },
  {
    id: 3,
    title: 'Gestion de communauté en ligne',
    description:
      "Optimiser la gestion de vos réseaux sociaux en créant une relation de confiance et en stimulant l'engagement de votre audience. Nous assurons la croissance et la fidélité de votre communauté.",
    avatar: Avatar3,
    name: 'Youssef Berrada',
    designation: '@youssef.berrada',
    email: 'youssef.berrada@mail.com',
    review: 5,
  },
  {
    id: 4,
    title: 'Production audiovisuelle',
    description:
      "Offrir des solutions de production audiovisuelle de qualité pour tous vos besoins vidéo. Nous créons des vidéos qui captivent et véhiculent efficacement votre message à travers des images et du son.",
    avatar: Avatar4,
    name: 'Yassine El Idrissi',
    designation: '@yassine.elidrissi',
    email: 'yassine.elidrissi@mail.com',
    review: 4,
  },
];


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function TestimonialCard() {
  return (
    <Box id="testimonial" sx={{ variant: 'section.testimonial' }}>
      <Container css={{ textAlign: 'center' }}>
        <SectionHeader slogan="Témoignage"  title="Rencontrez la Satisfaction des Clients"
                       sx={{
                         textAlign: 'center', // Centrer le texte
                         marginBottom: '60px', // Plus d'espace en bas

                         // Style du slogan
                         subTitle: {
                           fontSize: [1, null, 2], // Taille dynamique
                           color: '#6F4F37', // Couleur marron pour le sous-titre
                           textTransform: 'uppercase', // Texte en majuscules
                           fontWeight: '700', // Poids de la police plus épais
                           mb: [2, 3], // Marges dynamiques
                           letterSpacing: ['2px', null, '3px'],
                           // Espacement entre les lettres
                         },

                         // Style du titre
                         title: {
                           color: '#1d1d1d', // Couleur de texte plus foncée
                           fontSize: ['28px', '34px', '40px'], // Taille dynamique pour une meilleure réactivité
                           fontWeight: '800', // Titre en gras pour plus d'impact
                           letterSpacing: '-0.5px', // Réduire légèrement l'espacement des lettres pour plus de densité
                           lineHeight: 1.4, // Ajuster la hauteur de ligne pour rendre le titre plus aéré
                           whiteSpace: 'nowrap', // Forcer le texte sur une seule ligne
                           overflow: 'hidden', // Gérer les débordements
                           textOverflow: 'ellipsis', // Ajouter des points de suspension si le texte est trop long
                           "@media screen and (max-width: 900px)": {
                              whiteSpace: 'unset',
                              overflow: 'unset',
                              textOverflow: 'unset',
                            },
                         },
                       }}
        />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              <Rating rating={item.review} />
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <Text sx={styles.description}>{item.description}</Text>
              <div className="card-footer">
                <div className="image">
                  <Image src={item.avatar} alt="Client Image" />
                </div>
                <div className="reviewer-info">
                  <Heading as="h4" sx={styles.heading}>
                    {item.name}
                  </Heading>
                  <Text sx={styles.designation}>{item.designation}</Text>
                </div>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 2px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
