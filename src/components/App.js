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
            patients: data.patients,
            dentists: data.dentists,
            assistants: data.assistants,
            appointments: randomAppointments
        }
    this.makeDentistSick = this.makeDentistSick.bind(this);
    this.makePatientSick = this.makePatientSick.bind(this);
    this.addDentist = this.addDentist.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
    this.removeAppointment = this.removeAppointment.bind(this);
    this.editAppointment = this.editAppointment.bind(this);
    this.newPatient = this.newPatient.bind(this);
    }

    //function to add new patient used in NewPatient
    newPatient (patient){
        const patients = this.state.patients
        patients.push(patient)
        this.setState ({
            patients
        })
        alert(`Patient "${patient.firstname} ${patient.surname}" added`)
    }

    //function to make dentist sick, used in NewIllness
    makeDentistSick(dentists){
        alert("Dentist is marked ill, check the calendar for planning.")
        this.setState ({
            dentists
        })
    }

    //function to make patient sick, used in forms in NewIllness
    makePatientSick(appointments){
        alert("Patient marked ill. Appointments removed.")
        this.setState ({
            appointments
        })
    }

    //function to add dentist, used in newEmployee
    addDentist (event) {
        event.preventDefault();
        //set skills to be filled

        //get the type of employee to set
        const type = event.target.type.value;

        //get all the checkboxs from the form
        const checkboxes = Array.from(document.getElementsByClassName('skill-checkbox'));
    
        //check which skills is added and push to skills array of employee
        const skills = checkboxes.map(checkbox => {if (checkbox.checked){return checkbox.value} else {return null}
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

        //push the person to the corresponding array if the type is dentist
        if (type === "dentists") {
            this.setState ({
                dentists: employees
            })
        }

        //or if the type is assistant
        else {
            this.setState ({
                assistants: employees
            })
        }
        event.target.reset();
        alert("Person added. Thank you.")
        }
        
        //function to add an appoint, used in NewAppointment
        addAppointment(newAppointment){
            const appointments = this.state.appointments
            appointments.push(newAppointment)
            this.setState({
                appointments
            })
            alert('Appointment added, thank you.')
        }

        //function to remove an appointment, used in calendar
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

        //function to edit an appointment, used in calendar
        editAppointment (appId) {
            //ask user for a day, and store available times in "times"
            const selectedDay = parseInt(prompt("Enter a new day (1 - 28)"));
            const selectedApp = this.state.appointments.find(app => app.id === appId);
            const appsOnDay = this.state.appointments
                .filter(app => app.day === selectedDay)
            let times = Array.from({length:11},(v,k)=>k+8)
            let blockedTimes = []
            appsOnDay.forEach(app => {
                if(app.dentist.id === selectedApp.dentist.id || app.assistant.id === selectedApp.assistant.id){
                    times = times.filter(time => time !== app.time)
                }
            })

            //ask user for a time, and send it to appointments
            const selectedTime = parseInt(prompt(`Pick an available time (${times})`))
            if(times.includes(selectedTime)){
                selectedApp.time = selectedTime;
                selectedApp.day = selectedDay;
                const appointments = this.state.appointments.filter(app => app.id !== appId)
                appointments.push(selectedApp);
                this.setState({
                    appointments
                })
            }
            else{
                alert('Invalid time. Move aborted. Please try again.')
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
                    newPatient={this.newPatient}
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
