import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";

import generateRandomAppointments from "../functions/generateRandomAppointments.js";
import data from "../database.js";

const appointments = generateRandomAppointments(150);
console.log(appointments)

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      patients: data.patients,
      dentists: data.dentists,
      assistants: data.assistants,
      appointments: generateRandomAppointments(150)
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
                <Calendar appointments={this.state.appointments} />
              </Route>
              <Route path="/day">
                <Day appointments={this.state.appointments.filter(app => app.day === 1)} />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
export default App;
