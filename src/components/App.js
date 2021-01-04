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
      patients: [],
      dentists: [],
      assistants: [],
      appointments: [],
    }
    this.makeDentistSick = this.makeDentistSick.bind(this);
    this.makePatientSick = this.makePatientSick.bind(this);
    this.addDentist = this.addDentist.bind(this);
  }

componentDidMount (){
  this.setState ({
      patients: data.patients,
      dentists: data.dentists,
      assistants: data.assistants,
      appointments: randomAppointments
  })
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
      skills.push(parseInt(checkbox.value))
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
  console.log(this.state.dentists)
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
                <Calendar appointments={this.state.appointments} />
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
