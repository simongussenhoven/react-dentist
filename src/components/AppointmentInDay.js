import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({ time, patient, dentist, assistant, type }) => (
  <li className="appointment">
    <div className="time">{format_time(time)}</div>
    
    <h2 className="patient">Patient: {patient}</h2>
    <h3 className="type">Type: {type}</h3>
    <div className="dentist">Dentist: {dentist}</div>
    <div className="assistant">Assistant: {assistant}</div>
    
  </li>
);