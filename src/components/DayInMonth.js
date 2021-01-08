import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

export default ({ appointments, removeAppointment, editAppointment}) => {
    appointments.sort((a, b) => {
        return a.time - b.time;
    });

    const appointmentsJSX = appointments.map(({ time, patient, dentist, assistant, id }, index) => (
        <AppointmentInMonth 
        time={time} 
        patient={patient} 
        dentist={dentist} 
        assistant={assistant} 
        key={index} 
        removeAppointment={removeAppointment} 
        id={id}
        editAppointment={editAppointment}
        />
    ));
    return ( 
        <div className="day">
            {appointmentsJSX}
        </div>
    )
};
