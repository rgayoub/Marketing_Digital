'use client'; // Composant côté client
import React  from "react";
import { Container, Flex, Box } from "theme-ui";
import { keyframes } from "@emotion/react";
import { Link } from "react-scroll";
import Logo from "../../components/logo";
import LogoDark from "../../assets/logoHerDesigner2.png";
import { DrawerProvider } from "../../contexts/drawer/drawer.provider";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import { useRouter } from "next/navigation";

export default function Header({ className }) {
  const router = useRouter();

  // Fonction de redirection vers la page de contact
  const handleContactClick = () => {
    router.push('/contact'); // Redirige vers la route de la page contact
  };

  return (
      <DrawerProvider>
        <Box sx={styles.header} className={className} id="header">
          <Container sx={styles.container}>
            <Logo src={LogoDark} />

            <Flex as="nav" sx={styles.nav}>
              {menuItems.map(({ path, label }, i) => (
                  label === "Accueil" ? (
                      <a
                          key={i}
                          onClick={(e) => {
                            e.preventDefault(); // Empêche le comportement par défaut du lien
                            window.location.href = "/"; // Recharge la page Accueil
                          }}
                          className="accueil"
                          style={{ cursor: "pointer", color: "black" }}
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
                          className={
                            label === "Qui sommes-nous" ? "qui-sommes-nous" :
                                label === "Nos services" ? "nos-services" :
                                    label === "Nos réalisations" ? "nos-realisations" : ""
                          }
                      >
                        {label}
                      </Link>
                  )
              ))}
            </Flex>

            <div style={{ textAlign: "center", margin: "20px 0" }}>
              <button
                  className="donate__btn"
                  onClick={handleContactClick}
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "#fff",
                    color: "black",
                    border: "2px solid white",
                    cursor: "pointer",
                    borderRadius: "5px",
                    fontSize: "16px",
                    fontWeight: "500",
                    transition: "background-color 0.3s, color 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#b7934c"; // Fond marron au survol
                    e.target.style.color = "#fff"; // Texte blanc au survol
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#fff"; // Retour à l'arrière-plan blanc
                    e.target.style.color = "black"; // Retour au texte noir
                  }}
              >
                Contactez-nous
              </button>
            </div>

            <MobileDrawer />
          </Container>
        </Box>
      </DrawerProvider>
  );
}

// Animation pour le header lorsqu'il devient sticky
const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "black",
    fontWeight: "body",
    py: 0,
    borderBottom: "1px solid #e8e5e5",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 0,
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    logo: {
      height: "200px", // Ajuste la hauteur du logo
      width: "auto", // Maintient les proportions
      border:"2px solid black",
      "@media screen and (min-width: 1024px)": {
        height: "80px", // Taille plus grande sur grand écran
      },
    },
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      color: "black", // Couleur noire par défaut pour tous les liens
      "&:hover": {
        color: "#8B4513", // Marron au survol
      },
      "&.active": {
        color: "#8B4513", // Marron lorsque l'élément est actif
      },
    },
    ".accueil": {
      color: "#8B4513", // Couleur noire pour Accueil par défaut
      "&.active": {
        color: "#b7934c", // Marron plus clair quand "Accueil" est actif
      },
    },
    ".qui-sommes-nous, .nos-services, .nos-realisations": {
      color: "black", // Couleur noire par défaut
      "&:hover": {
        color: "#8B4513", // Marron au survol
      },
      "&.active": {
        color: "#8B4513", // Marron lorsque ces liens sont actifs
      },
    },
  },
};
