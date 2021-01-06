import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({ time, patient, dentist }) => {
    if (dentist.isIll){
        return (
        <div className="appointment ill">
            <span className="time">{format_time(time)}</span>
            <span className="patient">{`${patient.firstname} ${patient.surname}`}</span>
        </div>
        )
    }else {
        return(
        <div className="appointment">
            <span className="time">{format_time(time)}</span>
            <span className="patient">{`${patient.firstname} ${patient.surname}`}</span>
        </div>
        )
    }
}
