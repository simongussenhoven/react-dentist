import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

export default ({ appointments }) => {
  appointments.sort(function(a, b) {
    return a.time - b.time;
});

  const appointmentsJSX = appointments.map(({ time, patient, dentist, assistant }, index) => (
    <AppointmentInMonth time={time} patient={patient} dentist={dentist} assistant={assistant} key={index}/>
  ));
  return <div className="day">{appointmentsJSX}</div>;
};
