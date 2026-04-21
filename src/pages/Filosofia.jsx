import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Filosofia = () => {
  return (
    <>
      <Navbar />

      <section style={styles.container}>
        <h1 style={styles.title}>Menos es más</h1>

        <p style={styles.text}>
          Nuestra filosofía se centra en la observación y el respeto por los ritmos naturales.
          Creemos que cultivar un Bonsái no es solo jardinería, sino una meditación activa.
        </p>

        <p style={styles.text}>
          En nuestro estudio, te enseñamos a escuchar al árbol, entendiendo que cada corte
          y cada alambrado debe tener un propósito. Buscamos el equilibrio perfecto entre
          la intervención humana y la expresión salvaje de la naturaleza.
        </p>
      </section>

      <Footer />
    </>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "80px auto",
    padding: "0 80px"
  },
  title: {
    fontSize: "40px",
    marginBottom: "20px",
    color: "#2e3d2f"
  },
  text: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#555"
  }
};

export default Filosofia;