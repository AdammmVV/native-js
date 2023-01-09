import {StudentType} from "../02/02";

export function addTechnologies(stud: StudentType, technologies: string) {
    stud.technologies.push({
        id: new Date().getTime(),
        title: technologies,
    })
}

export function makeStudentActive(st: StudentType) {
    st.isActive = true
}

export function doesStudentLiveInCity(s: StudentType, city: string) {
    return s.address.city.title === city
}