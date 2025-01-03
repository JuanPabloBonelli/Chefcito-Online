import React from 'react';
import "./Contacto.css";

const Contacto = () => {
  return (
    <>
    <section className="contacto" id='contacto'>
      <h2>Contacto</h2>
      <p>Si tienes alguna pregunta, sugerencia o comentario, ¡nos encantaría saber de ti!</p>
      <form className="contacto-form">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />

        <label htmlFor="email">Correo</label>
        <input type="email" id="email" name="email" placeholder="tuemail@ejemplo.com" required />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows="5" placeholder="Escribe tu mensaje aquí" required></textarea>

        <button type="submit" className="btn-enviar">Enviar</button>
      </form>
    </section>
    </>
  );
};

export default Contacto;

