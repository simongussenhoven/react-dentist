import React from 'react'

function NewIllnessOption (props) {
    console.log(props)
    return(
        <option>{props.person.firstname} {props.person.surname}</option>
    )
}
export default NewIllnessOption