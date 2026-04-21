import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const Reservas = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    experiencia: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("reserva", JSON.stringify(formData));
    console.log(formData);

    alert("Solicitud enviada");
  };

  return (
    <>
      <Navbar />

      <section style={styles.container}>
        <h1 style={styles.title}>Reserva un Taller</h1>

        <p style={styles.text}>
          Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
            required
          />

          <select
            name="experiencia"
            onChange={handleChange}
            required
          >
            <option value="">Nivel de experiencia</option>
            <option>Principiante (Nunca he tenido un Bonsái)</option>
            <option>Intermedio</option>
            <option>Avanzado</option>
          </select>

          <textarea
            name="mensaje"
            placeholder="¿Qué te gustaría aprender?"
            onChange={handleChange}
          />

          <button type="submit">Enviar Solicitud</button>
        </form>
      </section>

      <Footer />
    </>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "80px auto",
    padding: "0 80px"
  },
  title: {
    fontSize: "36px",
    marginBottom: "10px",
    color: "#2e3d2f"
  },
  text: {
    marginBottom: "30px",
    color: "#555"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  }
};

export default Reservas;