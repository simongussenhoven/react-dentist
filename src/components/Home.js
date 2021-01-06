import React from "react";
import "../styles/App.css";
import NewPatient from './forms/NewPatient'
import NewEmployee from './forms/NewEmployee'
import NewIllness from './forms/NewIllness'
import NewAppointment from './forms/NewAppointment'

function Home (data) {
    return(
        <div className="formcontainer">
                    <NewAppointment {...data} addAppointment={data.addAppointment}/>
                    <NewEmployee addDentist={data.addDentist}/>
                    <NewPatient/>
                    <NewIllness markIll={data.markIll} {...data}/>
        </div>
    )
}
export default Home

