import React from "react";
function NewPatient() {
    return (
        <form>
            <h1>Sign up new patient</h1>
            <input type="text" placeholder="Enter firstname" required/>
            <input type="text" placeholder="Enter lastname" required/>
            <input type="text" placeholder="Enter birthyear" required/>
            <input type="text" placeholder="Enter e-mail address"/>
            <input type="text" placeholder="Enter phonenumber"/>
            <input type="submit" className="submit" value="Add patient"/>
        </form>
    )
}
export default NewPatient