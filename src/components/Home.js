import React from "react";
import "../styles/App.css";
import NewPatient from './forms/NewPatient'
import NewEmployee from './forms/NewEmployee'
import NewIllness from './forms/NewIllness'

export default () => 
<div className="formcontainer">
    <NewEmployee/>
    <NewPatient/>
    <NewIllness/>
</div>;

const getRandomTime = () => {
    let hour;
    while (true) {
        hour = Math.floor(Math.random() * 24);
            if (hour > 7 && hour < 19) {
            return hour;
        }
    }
};