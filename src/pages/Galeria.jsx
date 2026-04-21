import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Galeria = () => {
  const items = [
    "Arce Japonés",
    "Pino Negro",
    "Ficus Retusa",
    "Olmo Chino",
    "Enebro",
    "Azalea"
  ];

  return (
    <>
      <Navbar />

      <section style={styles.container}>
        <h1 style={styles.title}>Nuestra Colección</h1>

        <p style={styles.text}>
          Un vistazo a algunos de los ejemplares en los que hemos trabajado.
          Cada árbol cuenta una historia de tiempo y paciencia.
        </p>

        <div style={styles.grid}>
          {items.map((item, index) => (
            <div key={index} style={styles.card}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "80px auto",
    padding: "0 80px"
  },
  title: {
    fontSize: "40px",
    marginBottom: "10px",
    color: "#2e3d2f"
  },
  text: {
    marginBottom: "40px",
    color: "#555"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px"
  },
  card: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  }
};

export default Galeria;