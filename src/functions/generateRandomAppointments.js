import data from "../database.js";

//getting a random time
const getRandomTime = () => {
    let hour;
    while (true) {
        hour = Math.floor(Math.random() * 24);
        if (hour > 7 && hour < 19) {
            return hour;
    }
    }
};

//getting a random day
const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

//picking a random patient from the list
const getRandomPatient = () => {
    const person = data.patients[Math.floor(Math.random() * data.patients.length)]
    return person
}

const getRandomDentist = () => {
    const person = data.dentists[Math.floor(Math.random() * data.dentists.length)]
    return person
}

const getRandomAssistant = () => {
    const person = data.assistants[Math.floor(Math.random() * data.assistants.length)]
    return person
}

const getRandomType = () => {
    const types = ["Filling", "Place Crown", "Pull", "Surgery"]
    const type = types[Math.floor(Math.random() * 4)]
    return type

}

//generate x amount of appointments
const generateRandomAppointments = amount => {
    const appointments = [];
    let id = 0
    for (let i = amount; i > 0; --i){
        id++
        const appointment = {
            id: id,
            time: getRandomTime(),
            day: getRandomDay(),
            patient: getRandomPatient(),
            dentist: getRandomDentist(),
            assistant: getRandomAssistant(),
            type: getRandomType ()
        }
        appointments.push(appointment)
    }
    return appointments
}
export default generateRandomAppointments