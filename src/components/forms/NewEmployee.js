import React from "react";
import "../../styles/forms.css";

function NewEmployee() {
    return (
        <form>
            <h1>Sign up new employee</h1>
            <select>
                <option value="">Select a type</option>
                <option>Dentist</option>
                <option>Assistant</option>
            </select>
            <h2>Select skills</h2>
            <div className="checkboxes">
                
                <label>
                    <input type="checkbox"/>
                    <h4>Set fillings</h4>
                </label>

                <label>
                    <input type="checkbox"/>
                    <h4>Set crown</h4>
                </label>

                <label>
                    <input type="checkbox"/>
                    <h4>Pull tooth</h4>
                </label>

                <label>
                    <input type="checkbox"/>
                    <h4>Dental surgery</h4>
                </label>
            </div>
            <input type="submit" value="Add employee" className="submit"/>
        </form>
    )
}
export default NewEmployee