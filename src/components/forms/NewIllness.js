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

    handleSubmit = (event) => {
        console.log(event.target.person.value)
        console.log(event.target.type.value)
        event.preventDefault();
    }

    render(){
        const getOptions = 
                this.state.selected.map(person => {
                    return <NewIllnessOption {...person} key={person.id}/>
            })
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Mark for illness</h1>
                <select name="type" onChange={this.handleChange} required>
                    <option value="" disabled selected>{this.state.selector}</option>
                    <option value="patients">Patient</option>
                    <option value="dentists">Dentist</option>
                </select>
                <select name="person" required>
                    <option value="" disabled selected>Select a Person</option>
                    {getOptions}
                </select>
                <input className="submit" type="submit" value="Mark as ill"/>
            </form>
        )
    }
}
export default NewIllness