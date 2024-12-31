import { Container, Box, Flex } from 'theme-ui';
import { keyframes } from '@emotion/react';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import PriceCard from '../components/price-card';
import ButtonGroup from '../components/button-group';
import SectionHeader from '../components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

const packages = {
  monthly: [
    {
      id: 1,
      name: 'Pack de Base (C2C)',
      // description: 'Services inclus ',
      buttonText: 'Profiter',
      priceWithUnitMad: '1 200 ',
      priceWithUnitEuro: '110 ' ,
      priceWithUnitFcfa: '72 000 ',
      points: [
        { id: 1, icon: <IoIosCheckmarkCircle style={{ color: '#b7935a' }} />, text: 'Design', isAvailable: true },
        { id: 2, icon: <IoIosCloseCircle />, text: 'Création de contenu', isAvailable: false },
        { id: 3, icon: <IoIosCloseCircle />, text: 'Community Manager', isAvailable: false },
        { id: 4, icon: <IoIosCloseCircle />, text: 'Production audiovisuelle', isAvailable: false },
      ],
      descrip:'Le Pack de Base (C2C) est conçu pour les petites entreprises et entrepreneurs qui souhaitent poser les bases de leur identité visuelle de manière professionnelle. Il comprend exclusivement le design, permettant de créer des éléments graphiques essentiels pour représenter votre marque. Idéal pour ceux qui débutent, ce pack ne propose pas la création de contenu, la gestion des réseaux sociaux ou la production audiovisuelle, mais reste une excellente première étape pour développer votre présence visuelle.',
    },
    {
      id: 2,
      name: 'Pack Standard (C2C)',
      // description: 'Services inclus ',
      priceWithUnitMad: '2 500  ',
      priceWithUnitEuro: '230 ' ,
      priceWithUnitFcfa: '150 000 ',
      buttonText: 'Profiter',
      points: [
        { id: 1, icon: <IoIosCheckmarkCircle style={{ color: '#b7935a' }} />, text: 'Design', isAvailable: true },
        { id: 2, icon: <IoIosCheckmarkCircle style={{ color: '#b7935a' }} />, text: 'Création de contenu', isAvailable: true },
        { id: 3, icon: <IoIosCloseCircle />, text: 'Community Manager', isAvailable: false },
        { id: 4, icon: <IoIosCloseCircle />, text: 'Production audiovisuelle', isAvailable: false },
      ],
      descrip: "Le Pack Standard (C2C) s'adresse aux entreprises et entrepreneurs qui souhaitent une approche plus complète pour renforcer leur identité visuelle et communiquer efficacement. Ce pack inclut le design, pour des créations graphiques professionnelles, ainsi que la création de contenu, garantissant des messages adaptés et engageants pour votre public cible. Il ne comprend pas la gestion des réseaux sociaux ni la production audiovisuelle, mais constitue une solution équilibrée pour développer votre présence en ligne et hors ligne.",
    },
    {
      id: 3,
      header: 'Suggéré',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'Pack Complet (C2C)',
      // description: 'Services inclus ',
      priceWithUnitMad: '5 500  ',
      priceWithUnitEuro: '500 ' ,
      priceWithUnitFcfa: '330 000 ',
      buttonText: 'Profiter',
      points: [
        { id: 1, icon: <IoIosCheckmarkCircle style={{ color: '#b7935a' }} />, text: 'Design', isAvailable: true },
        { id: 2, icon: <IoIosCheckmarkCircle style={{ color: '#b7935a' }} />, text: 'Création de contenu', isAvailable: true },
        { id: 3, icon: <IoIosCheckmarkCircle style={{ color: '#b7935a' }} />, text: 'Community Manager', isAvailable: true },
        { id: 4, icon: <IoIosCheckmarkCircle style={{ color: '#b7935a' }} />, text: 'Production audiovisuelle', isAvailable: true },
      ],
    descrip: "Le Pack Complet (C2C) est une solution tout-en-un pour les entreprises et entrepreneurs qui souhaitent une stratégie de communication globale et professionnelle. Ce pack inclut le design, la création de contenu, la gestion par un community manager et la production audiovisuelle, offrant ainsi tous les outils nécessaires pour établir une forte présence en ligne et hors ligne. Idéal pour les marques ambitieuses, il garantit une communication cohérente, engageante et percutante sur tous les supports.",
    },
  ],
  annual: [
    {
      id: 1,
      name: 'Pack de Base (C2C)',
      description: '10% de réduction',
      buttonText: 'Profiter',
      priceWithUnitMad: '12 960  ',
      priceWithUnitEuro: '1 188 ' ,
      priceWithUnitFcfa: '777 000 ',
      points: [
        { id: 1, icon: <IoIosCheckmarkCircle style={{ color: '#b7935a' }} />, text: 'Design', isAvailable: true },
        { id: 2, icon: <IoIosCloseCircle />, text: 'Création de contenu', isAvailable: false },
        { id: 3, icon: <IoIosCloseCircle />, text: 'Community Manager', isAvailable: false },
        { id: 4, icon: <IoIosCloseCircle />, text: 'Production audiovisuelle', isAvailable: false },
      ],
      descrip:'Le Pack de Base (C2C) est conçu pour les petites entreprises et entrepreneurs qui souhaitent poser les bases de leur identité visuelle de manière professionnelle. Il comprend exclusivement le design, permettant de créer des éléments graphiques essentiels pour représenter votre marque. Idéal pour ceux qui débutent, ce pack ne propose pas la création de contenu, la gestion des réseaux sociaux ou la production audiovisuelle, mais reste une excellente première étape pour développer votre présence visuelle.',
    },
    {
      id: 2,
      name: 'Pack Standard  (C2C)',
      description: '10% de réduction',
      priceWithUnitMad: '27 000  ',
      priceWithUnitEuro: '2 484 ' ,
      priceWithUnitFcfa: '1 620 000 ',
      buttonText: 'Profiter',
      points: [
        { id: 1, icon: <IoIosCheckmarkCircle style={{ color: '#b7935a' }} />, text: 'Design', isAvailable: true },
        { id: 2, icon: <IoIosCheckmarkCircle style={{ color: '#b7935a' }} />, text: 'Création de contenu', isAvailable: true },
        { id: 3, icon: <IoIosCloseCircle />, text: 'Community Manager', isAvailable: false },
        { id: 4, icon: <IoIosCloseCircle />, text: 'Production audiovisuelle', isAvailable: false },
      ],
      descrip: "Le Pack Standard (C2C) s'adresse aux entreprises et entrepreneurs qui souhaitent une approche plus complète pour renforcer leur identité visuelle et communiquer efficacement. Ce pack inclut le design, pour des créations graphiques professionnelles, ainsi que la création de contenu, garantissant des messages adaptés et engageants pour votre public cible. Il ne comprend pas la gestion des réseaux sociaux ni la production audiovisuelle, mais constitue une solution équilibrée pour développer votre présence en ligne et hors ligne.",
    },
    {
      id: 3,
      header: 'Suggéré',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'Pack Complet (C2C)',
      description: '15% de réduction ',
      priceWithUnitMad: '56 100  ',
      priceWithUnitEuro: '5 100 ' ,
      priceWithUnitFcfa: '3 366 000 ',
      buttonText: 'Profiter',
      points: [
        { id: 1, icon: <IoIosCheckmarkCircle style={{ color: '#b7935a' }} />, text: 'Design', isAvailable: true },
        { id: 2, icon: <IoIosCheckmarkCircle style={{ color: '#b7935a' }} />, text: 'Création de contenu', isAvailable: true },
        { id: 3, icon: <IoIosCheckmarkCircle style={{ color: '#b7935a' }} />, text: 'Community Manager', isAvailable: true },
        { id: 4, icon: <IoIosCheckmarkCircle style={{ color: '#b7935a' }} />, text: 'Production audiovisuelle', isAvailable: true },
      ],
    descrip: "Le Pack Complet (C2C) est une solution tout-en-un pour les entreprises et entrepreneurs qui souhaitent une stratégie de communication globale et professionnelle. Ce pack inclut le design, la création de contenu, la gestion par un community manager et la production audiovisuelle, offrant ainsi tous les outils nécessaires pour établir une forte présence en ligne et hors ligne. Idéal pour les marques ambitieuses, il garantit une communication cohérente, engageante et percutante sur tous les supports.",
    },
  ],
};

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, draggable: false },
  tablet: { breakpoint: { max: 1023, min: 640 }, items: 2, draggable: true },
  mobile: { breakpoint: { max: 639, min: 0 }, items: 1, draggable: true },
};

const PackDetails = ({ pack, onClose }) => {
  if (!pack) return null;

  return (
      <Box sx={styles.detailsWrapper}>
        <h2>{pack.name}</h2>
        {/* <p>{pack.description}</p> */}
        <p>Prix : {pack.priceWithUnit}</p>
        <ul>
          {pack.points.map(point => (
              <li key={point.id}>
                {point.icon} {point.text}
              </li>
          ))}
        </ul>
        <button onClick={onClose}>Retour</button>
      </Box>
  );
};

export default function Package() {
  const { monthly, annual } = packages;
  const [state, setState] = useState({ active: 'monthly', pricingPlan: monthly });
  const [selectedPack, setSelectedPack] = useState(null);

  const handlePricingPlan = (plan) => {
    if (plan === 'annual') {
      setState({ ...state, active: 'annual', pricingPlan: annual });
    } else {
      setState({ ...state, active: 'monthly', pricingPlan: monthly });
    }
  };

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

  return (
      <Box id="pricing" sx={{ variant: 'section.pricing' }}>
        <Container>
          <SectionHeader
              slogan="Plan Tarifaire"
              title="Choisissez votre politique tarifaire"
              sx={{
                textAlign: 'center',
                marginBottom: '60px',
                subTitle: {
                  fontSize: [1, null, 2],
                  color: '#6F4F37',
                  textTransform: 'uppercase',
                  fontWeight: '700',
                  mb: [2, 3],
                  letterSpacing: ['2px', null, '3px'],
                },
                title: {
                  color: '#1d1d1d',
                  fontSize: ['28px', '34px', '40px'],
                  fontWeight: '800',
                  letterSpacing: '-0.5px',
                  lineHeight: 1.4,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  "@media screen and (max-width: 780px)": {
                    whiteSpace: 'unset',
                    overflow: 'unset',
                    textOverflow: 'unset',
                  },
                },
              }}
          />
          <Flex sx={styles.buttonGroup}>
            <Box sx={styles.buttonGroupInner}>
              <button
                  className={state.active === 'monthly' ? 'active' : ''}
                  type="button"
                  aria-label="Plan mensuel"
                  onClick={() => handlePricingPlan('monthly')}
              >
                Plan Mensuel
              </button>
              <button
                  className={state.active === 'annual' ? 'active' : ''}
                  type="button"
                  aria-label="Annuel"
                  onClick={() => handlePricingPlan('annual')}
              >
                Plan Annuel
              </button>
            </Box>
          </Flex>
          <Box sx={styles.pricingWrapper} className="pricing__wrapper">
            <Carousel {...sliderParams}>
              {state.pricingPlan.map((packageData) => (
                  <Box sx={styles.pricingItem} key={`${state.active}-card--key${packageData.id}`}>
                    <PriceCard
                        data={packageData}
                        onClick={() => setSelectedPack(packageData)} // Passer la fonction onClick
                    />
                  </Box>
              ))}
            </Carousel>
          </Box>
          <PackDetails pack={selectedPack} onClose={() => setSelectedPack(null)} /> {/* Afficher les détails du pack */}
        </Container>
      </Box>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
`;

const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
`;

const styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    '.carousel-container': {
      width: '100%',
      '> ul ': {
        display: 'flex',
        margin: '0',
        padding: '0',
      },
      '> ul > li ': {
        display: 'flex',
      },
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto',
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2,
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
  detailsWrapper: {
    marginTop: '20px',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
};