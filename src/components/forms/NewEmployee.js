import React from "react";
import "../../styles/forms.css";

function NewEmployee(props) {
    return (
        <form onSubmit={props.addDentist}>
            <h1>Sign up new employee</h1>
            <select name="type" defaultValue="" required>
                <option value="" disabled>Select a type</option>
                <option value="dentists">Dentist</option>
                <option value="assistants">Assistant</option>
            </select>
            <input name="firstname" placeholder="First name" required></input>
            <input name="surname" placeholder="Surname" required></input>
            <h2>Select skills</h2>
            <div className="checkboxes">
                
                <label>
                    <input className="skill-checkbox" value="Set filling" type="checkbox"/>
                    <h4>Set fillings</h4>
                </label>

                <label>
                    <input className="skill-checkbox" value="Set crown" type="checkbox"/>
                    <h4>Set crown</h4>
                </label>

                <label>
                    <input className="skill-checkbox" value="Pull tooth" type="checkbox"/>
                    <h4>Pull tooth</h4>
                </label>

                <label>
                    <input className="skill-checkbox" value="Dental surgery" type="checkbox"/>
                    <h4>Dental surgery</h4>
                </label>
            </div>
            <input type="submit" value="Add employee" className="submit"/>
        </form>
    )
}
export default NewEmployee