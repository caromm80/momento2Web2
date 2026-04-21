const Hero = () => {
  return (
    <section style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>
          El arte de la <br /> paciencia
        </h1>

        <p style={styles.text}>
          Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.
          <br />
          Un espacio para reconectar con la naturaleza.
        </p>

        <button style={styles.button}>Reserva un taller</button>
      </div>
    </section>
  );
};

const styles = {
  container: {
    height: "80vh",
    display: "flex",
    alignItems: "center",
    padding: "0 80px",
    backgroundColor: "#f5f5f2"
  },
  content: {
    maxWidth: "600px"
  },
  title: {
    fontSize: "64px",
    fontWeight: "500",
    color: "#2e3d2f",
    marginBottom: "20px",
    lineHeight: "1.1"
  },
  text: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px"
  },
  button: {
    backgroundColor: "#2e3d2f",
    color: "white",
    padding: "15px 25px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default Hero;