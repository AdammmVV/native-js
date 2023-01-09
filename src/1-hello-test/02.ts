type StudentType = {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType,
    technologies: Array<TechnologiesType>
}

type AddressType = {
    streetTitle: string,
    city: LocalCityType
}

type LocalCityType = {
    title: string,
    countryTitle: string,
}

type TechnologiesType = {
    id: number,
    title: string
}

const student: StudentType = {
    id: 1,
    name: 'Valry',
    age: 29,
    isActive: true,
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

console.log(student.address.city.title)
console.log(student.technologies[2].id)

