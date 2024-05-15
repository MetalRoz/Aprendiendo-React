import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {
  //state de citas

  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const submitCita = e => {
    e.preventDefault();
    cita.id = uuidv4();
    
    crearCita(cita)
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    })
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      <form onSubmit={submitCita}>
        <label>Nombre mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de mascota"
          value={mascota}
          required
          onChange={actualizarState}
        ></input>

        <label>Nombre del dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueño"
          value={propietario}
          required
          onChange={actualizarState}
        ></input>

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          value={fecha}
          required
          onChange={actualizarState}
        ></input>

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          value={hora}
          required
          onChange={actualizarState}
        ></input>

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          value={sintomas}
          required
          onChange={actualizarState}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
