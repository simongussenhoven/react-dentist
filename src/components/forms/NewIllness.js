import React from "react";
function NewIllness() {
    return (
        <form>
            <h1>Mark for illness</h1>
            <select>
                <option value="">Select a type</option>
                <option>Patient</option>
                <option>Dentist</option>
                <option>Assistant</option>
            </select>
            <select>
                <option value="">Select a Person</option>
                <option>Generate persons here</option>
            </select>
            <input className="submit" type="submit" value="Mark as ill"/>
        </form>
    )
}
export default NewIllness