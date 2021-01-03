import React from "react";
import "../styles/App.css";
import NewPatient from './forms/NewPatient'
import NewEmployee from './forms/NewEmployee'
import NewIllness from './forms/NewIllness'

function Home (data) {
    return(
        <div className="formcontainer">
            <NewEmployee/>
            <NewPatient/>
            <NewIllness markIll={data.markIll} {...data}/>
        </div>
    )
}
export default Home