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

componentDidUpdate(){
  console.log(this.state.appointments)
}

makePatientSick(newList){
  console.log(newList)
  this.setState ({
    appointments: newList
  })
  console.log(this.state.appointments)
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
                <Home data={this.state} makeDentistSick={this.makeDentistSick} makePatientSick={this.makePatientSick}/>
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
export default App;
