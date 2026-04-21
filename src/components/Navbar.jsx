import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>ZENITH BONSAI</h2>

      <div style={styles.links}>
        <Link to="/filosofia">Filosofía</Link>
        <Link to="/galeria">Galería</Link>
        <Link to="/reservas">Reservas</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    borderBottom: "1px solid #ddd"
  },
  logo: {
    fontWeight: "bold"
  },
  links: {
    display: "flex",
    gap: "30px"
  }
};

export default Navbar;
color: "#2e3d2f"