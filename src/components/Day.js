import React from "react";
import "../styles/Day.css";
import AppointmentInDay from "./AppointmentInDay";

export default ({ appointments }) => {
  const appointmentsJSX = appointments.map(
    ({ time, patient, dentist, assistant, type }, index) => (
      <AppointmentInDay
        time={time}
        patient={patient}
        dentist={dentist}
        assistant={assistant}
        type={type}
        key={index}
      />
    )
  );
  return <ul className="dayview">{appointmentsJSX}</ul>;
};
