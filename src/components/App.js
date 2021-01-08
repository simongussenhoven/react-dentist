import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";
import data from "../database.js";
import generateRandomAppointments from "../functions/generateRandomAppointments.js";

const randomAppointments = generateRandomAppointments(150)

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            patients: data.patients.sort((a, b) => {
                return a.firstname.localeCompare(b.firstname)
            }),
            dentists: data.dentists.sort((a, b) => {
                return a.firstname.localeCompare(b.firstname)
            }),
            assistants: data.assistants.sort((a, b) => {
                return a.firstname.localeCompare(b.firstname)
            }),
            appointments: randomAppointments
        }
    this.makeDentistSick = this.makeDentistSick.bind(this);
    this.makePatientSick = this.makePatientSick.bind(this);
    this.addDentist = this.addDentist.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
    this.removeAppointment = this.removeAppointment.bind(this);
    this.editAppointment = this.editAppointment.bind(this);
    }


    makeDentistSick(newList){
        this.setState ({
            dentists: newList
        })
        alert("Dentist is marked ill, check the calendar for planning.")
    }

    makePatientSick(newList){
        this.setState ({
            appointments: newList
        })
    }

    addDentist (event) {
        event.preventDefault();
        //set skills to be filled
        const skills = [];

        //get the type of employee to set
        const type = event.target.type.value;

        //get all the checkboxs from the form
        const checkboxes = Array.from(document.getElementsByClassName('skill-checkbox'));
    
        //check which skills is added and push to skills array of employee
        checkboxes.forEach(checkbox => {
            if (checkbox.checked){
                skills.push(checkbox.value)
            }
        })

        //compile the person
        const newPerson = {
            id: this.state[event.target.type.value].slice(-1)[0].id +1,
            firstname: event.target.firstname.value,
            surname: event.target.surname.value,
            email: `${event.target.firstname.value}.${event.target.surname.value}@tandartspraktijkbvt.nl`,
            skills: skills
        }
        const employees = this.state[event.target.type.value]
        employees.push(newPerson)

        //push the person to the corresponding array
        if (type === "dentists") {
            this.setState ({
                dentists: employees
            })
        }
        else {
            this.setState ({
                assistants: employees
            })
        }
        event.target.reset();
        alert("Person added. Thank you.")
        }
        
        //function to remove the appointment
        addAppointment(newAppointment){
            const appointments = this.state.appointments
            appointments.push(newAppointment)
            this.setState({
                appointments
            })
            alert('Appointment added, thank you.')
        }

        removeAppointment(appointment){   
        const answer = window.confirm("Do you want to remove this appointment?");
            if (answer) {
                const appointments = this.state.appointments.filter(app => {
                    return app.id !== appointment
                })
                this.setState ({
                    appointments
                })
            }
        }

        editAppointment (id) {
            const day = parseInt(prompt("Enter a new day (1 - 28)"));
            const selectedApp = this.state.appointments.find(app => app.id === id);
            const appsOnTime = this.state.appointments
                .filter(app => app.day === day)
                .filter(app => app.time === selectedApp.time);
            
            const times = Array.from({length:11},(v,k)=>k+8);
            
            const freeTimes = [];
            times.forEach(time => {
                let isFree = true;
                appsOnTime.forEach(app => {
                    if (app.dentist.id === selectedApp.dentist.id || app.assistant.id === selectedApp.assistant.id){isFree = false}})
                if(isFree){freeTimes.push(time)}
            })
            const selectedTime = prompt(`Select a free time ${freeTimes}`);
            if (selectedTime.includes(freeTimes){
                selectedApp.time = selectedTime
                this.state.appointments.filter(app => {return app.id !== id})
            }
        }
    render() {
        return(
        <Router>
            <div>
            <nav>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/calendar">Calendar view</Link>
                </li>
                <li>
                    <Link to="/day">Day view</Link>
                </li>
                </ul>
            </nav>
            <main>
                <Switch>
                <Route path="/calendar">
                    <Calendar 
                    appointments={this.state.appointments} 
                    removeAppointment={this.removeAppointment}
                    editAppointment={this.editAppointment}
                    />
                </Route>
                <Route path="/day">
                    <Day appointments={this.state.appointments.filter(app => app.day === 1)} />
                </Route>
                <Route path="/">
                    <Home 
                    data={this.state} 
                    makeDentistSick={this.makeDentistSick} 
                    makePatientSick={this.makePatientSick}
                    addDentist={this.addDentist}
                    addAppointment={this.addAppointment}
                    />
                </Route>
                </Switch>
            </main>
            </div>
        </Router>
        );
    }
}
export default App;
