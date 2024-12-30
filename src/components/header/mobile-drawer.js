import React, { useState, useContext } from 'react';
import { Box } from 'theme-ui';
import Drawer from 'components/drawer';
import { DrawerContext } from '../../contexts/drawer/drawer.context';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import menuItems from './header.data';

const social = [
  {
    path: 'https://wa.me/221779200000',
    icon: <FaWhatsapp color="#b7934c" />, // Beige
  },
  {
    path: 'https://www.instagram.com/herdeesigner',
    icon: <FaInstagram color="#b7934c" />, // Beige
  },
];

const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(null);

  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  const handleContactClick = () => {
    router.push('/contact');
    toggleHandler();
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    toggleHandler();
  };

  return (
    <Drawer
      width="300px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="26px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#333" />} // Noir clair pour le bouton fermer
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Box sx={styles.content}>
        <Box sx={styles.menu}>
          {menuItems.map(({ path, label }, i) => (
            <a
              href={`#${path}`}
              key={i}
              onClick={() => handleLinkClick(path)}
              style={{
                color: activeLink === path ? '#b7934c' : '#333', // Beige pour actif, noir clair pour inactif
                fontWeight: activeLink === path ? '600' : '400',
                textDecoration: 'none',
              }}
            >
              {label}
            </a>
          ))}
          <a
            className="donate__btn"
            onClick={handleContactClick}
            style={styles.contactLink}
          >
            Contactez-nous
          </a>
        </Box>

        <Box sx={styles.menuFooter}>
          <Box sx={styles.social}>
            {social.map(({ path, icon }, i) => (
              <Box as="span" key={i} sx={styles.social.icon}>
                <a href={path}>{icon}</a>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    '@media screen and (min-width: 1040px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FAFAFA', // Blanc cassé pour le fond
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#333', // Noir clair
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #E0E0E0', // Beige clair
      transition: 'all 0.25s',
      '&:hover': {
        color: '#b7934c', // Beige au survol
      },
    },
  },

  contactLink: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#333',
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #b7934c', // Beige
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '5px',
    backgroundColor: '#FAFAFA',
    transition: 'all 0.25s',
    '&:hover': {
      color: '#FFF',
      backgroundColor: '#b7934c', // Beige au survol
    },
    animation: 'pulse 1.5s ease-in-out infinite', // Animation pour le bouton
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        opacity: 0.8,
      },
    },
  },
};

// Animation CSS pour le bouton
const globalStyles = {
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.05)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
};

export default MobileDrawer;
