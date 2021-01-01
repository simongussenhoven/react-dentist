import React from "react";
import NewIllnessOption from './NewIllnessOption'

class NewIllness extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selector: "Please select a type of person",
            selected: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState ({
            selected: this.props.data[event.target.value]
        })
    }

    render(){
        const getOptions = 
                this.state.selected.map(person => {
                    return <NewIllnessOption person={person}/>
            })
        return (
            <form>
                <h1>Mark for illness</h1>
                <select onChange={this.handleChange} required>
                    <option value="" disabled selected>{this.state.selector}</option>
                    <option value="patients">Patient</option>
                    <option value="dentists">Dentist</option>
                    <option value="assistants">Assistant</option>
                </select>
                <select required>
                    <option value="" disabled defaultValue>Select a Person</option>
                    {getOptions}
                </select>
                <input className="submit" type="submit" value="Mark as ill"/>
            </form>
        )
    }
}
export default NewIllness