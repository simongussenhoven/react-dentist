import React from "react";
import NewIllnessOption from './NewIllnessOption'

class NewIllness extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selector: "Please select a type of person",
            selected: [],
            appointments: props.data.appointments
        };
        this.handleChange = this.handleChange.bind(this);
    }

    //updating changes made in the form
    handleChange = (event) => { 
        const selected = this.props.data[event.target.value]
        this.setState ({
            selected
        })
    }

    //Handling submit event to mark as ill
    handleSubmit = (event) => {
        event.preventDefault();

        //get the type and person id from the form
        const type = event.target.type.value
        const id = parseInt(event.target.id.value)

        //for dentists, just change the isIll boolean and pass back to App
        if (type === "dentists") {
            const newList = this.state.selected;
            newList[id].isIll = true;
            this.props.makeDentistSick(newList);
        }

        //for patients, get the array of appointments and
        else {   
            const appointments = this.state.appointments.filter(app => {
                return app.patient.id !== id
            })
            this.props.makePatientSick(appointments)
        }
        event.target.reset();
    }

    render(){
        const getOptions = 
                this.state.selected.map(person => {
                    return <NewIllnessOption {...person} key={person.id}/>
                    
            })
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Mark for illness</h1>
                <select name="type" onChange={this.handleChange} defaultValue="" required>
                    <option value="" disabled>{this.state.selector}</option>
                    <option value="patients">Patient</option>
                    <option value="dentists">Dentist</option>
                </select>
                <select name="id" defaultValue="" required >
                    <option value="" disabled>Select a Person</option>
                    {getOptions}
                </select>
                <input className="submit" type="submit" value="Mark as ill"/>
            </form>
        )
    }
}
export default NewIllness