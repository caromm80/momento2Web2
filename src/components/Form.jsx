import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    fecha: ""
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

    console.log("Datos guardados:", formData);

    alert("Reserva guardada");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Correo"
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="fecha"
        onChange={handleChange}
        required
      />

      <button type="submit">Reservar</button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "40px"
  }
};

export default Form;