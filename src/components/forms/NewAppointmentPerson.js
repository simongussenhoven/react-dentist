import React from 'react'

function NewAppointmentPerson (props) {
    return(
        <option value={props.id}>{props.firstname} {props.surname}</option>
    )
}
export default NewAppointmentPerson