import {StudentType} from "../02/02";
import {addTechnologies, doesStudentLiveInCity, makeStudentActive} from "./03_03";

let student: StudentType

beforeEach(() => {
    student = {
        id: 1,
        name: 'Valry',
        age: 29,
        isActive: false,
        address: {
            streetTitle: 'Slavinskogo, 41',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus',
            },
        },
        technologies: [
            {
                id: 1,
                title: 'html',
            },
            {
                id: 2,
                title: 'CSS',
            },
            {
                id: 3,
                title: 'TS',
            },
            {
                id: 4,
                title: 'React',
            },
        ]
    }
})

test('new technologies for student', () => {
    expect(student.technologies.length).toBe(4)

    addTechnologies(student, 'js')

    expect(student.technologies.length).toBe(5)
    expect(student.technologies[4].id).toBeDefined()
    expect(student.technologies[4].title).toBe('js')
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test('does student live in city', () => {
    let result1 = doesStudentLiveInCity(student, 'Moscow')
    let result2 = doesStudentLiveInCity(student, 'Minsk')

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})