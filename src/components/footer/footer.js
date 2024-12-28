import { Box, Container, Text } from 'theme-ui';
import { Link } from 'react-scroll';
import data from './footer.data';
import FooterLogo from 'assets/logoHerDesigner.png';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { Link as Link2 } from 'components/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Link2 path="/">
            <Image src={FooterLogo} alt="Logo" width={270} />
          </Link2>

          <Box sx={styles.footer.expressiveText}>
            "Nous transformons vos idées en réalité visuelle et numérique, avec passion et créativité"
          </Box>

          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map(({ path, label }, i) => (
                label === "Accueil" ? (
                  <a
                    key={i}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/";
                    }}
                    className="accueil"
                    style={{ cursor: "pointer", color: "black", marginRight: "20px", marginBottom: "20px" }}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    activeClass="active"
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    key={i} 
                    className={label === "Qui sommes-nous" ? "qui-sommes-nous" :
                      label === "Nos services" ? "nos-services" :
                        label === "Nos réalisations" ? "nos-realisations" : ""}
                    style={{ cursor: "pointer", color: "black", marginRight: "20px", marginBottom: "20px" }}
                  >
                    {label}
                  </Link>
                )
              ))}
              <a
                className="donate__btn"
                onClick={handleContactClick}
                style={{ cursor: "pointer", color: "black", marginRight: "20px", marginBottom: "20px" }}
              >
                Contactez-nous
              </a>
            </nav>
          </Box>

          {/* Section horaire et réseaux sociaux */}
          <Box sx={styles.footer.infoSection}>
            <Text sx={styles.footer.infoText}>Disponible 24/24h</Text>
            <Box sx={styles.footer.socialIcons}>
              <a href="https://wa.me/221779200000" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={24} style={styles.footer.icon} />
              </a>
              <a href="https://www.instagram.com/herdeesigner" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} style={styles.footer.icon} />
              </a>
            </Box>
          </Box>

          <Text sx={styles.footer.copyright}>
            HerDESIGNER {new Date().getFullYear()} &copy;
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },
    expressiveText: {
      fontSize: "20px",
      fontWeight: '700',
      textAlign: 'center',
      fontFamily: '"Georgia", "Times New Roman", serif',
      letterSpacing: '1.5px',
      lineHeight: '1.8',
      background: 'linear-gradient(90deg, #ffffff, #d1b48c, #000000)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: '1px 2px 2px rgba(0, 0, 0, 0.2)',
    },
    infoSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mt: 4,
      mb: 3,
    },
    infoText: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#d1b48c',
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      mt: 2,
      a: {
        margin: '0 10px',
        textDecoration: 'none',
      },
    },
    icon: {
      color: '#000000',
      transition: 'color 0.3s',
      ':hover': {
        color: '#d1b48c',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
      color: '#000000',
    },
  },
};
