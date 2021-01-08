

import React from "react";
function NewPatient(props) {
    const patients = props.data.patients
    const handleSubmit = (e) => {
        e.preventDefault();
        const patient = {
            id: patients.sort((a,b) => a.id - b.id).slice(-1)[0].id + 1,
            firstname: e.target.firstname.value,
            surname: e.target.surname.value,
            birthyear: e.target.birthyear.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
        }
        props.newPatient(patient);
        e.target.reset();
        }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign up new patient</h1>
            <input type="text" name="firstname" placeholder="Enter firstname" required/>
            <input type="text" name="surname" placeholder="Enter lastname" required/>
            <input type="text" name="birthyear" placeholder="Enter birthyear" required/>
            <input type="text" name="email" placeholder="Enter e-mail address" required/>
            <input type="text" name="phone" placeholder="Enter phonenumber" required/>
            <input type="submit" className="submit" value="Add patient" required/>
        </form>
    )
}
export default NewPatient