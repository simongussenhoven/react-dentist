import React from "react";
import "../../styles/forms.css";

function NewEmployee(props) {
    return (
        <form onSubmit={props.addDentist}>
            <h1>Sign up new employee</h1>
            <select name="type" required>
                <option value="" selected disabled>Select a type</option>
                <option value="dentists">Dentist</option>
                <option value="assistants">Assistant</option>
            </select>
            <input name="firstname" placeholder="First name" required></input>
            <input name="surname" placeholder="Surname" required></input>
            <h2>Select skills</h2>
            <div className="checkboxes">
                
                <label>
                    <input className="skill-checkbox" value="1" type="checkbox"/>
                    <h4>Set fillings</h4>
                </label>

                <label>
                    <input className="skill-checkbox" value="2" type="checkbox"/>
                    <h4>Set crown</h4>
                </label>

                <label>
                    <input className="skill-checkbox" value="3" type="checkbox"/>
                    <h4>Pull tooth</h4>
                </label>

                <label>
                    <input className="skill-checkbox" value="4" type="checkbox"/>
                    <h4>Dental surgery</h4>
                </label>
            </div>
            <input type="submit" value="Add employee" className="submit"/>
        </form>
    )
}
export default NewEmployee