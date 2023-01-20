import {MenPropsType} from "./Destructuring";

let props: MenPropsType;

beforeEach(() => {
    props = {
        name: 'Adammm',
        age: 29,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }
})


test('', () => {
    const {age, lessons} = props
    const {title} = props.address.street

    const a = props.age
    const l = props.lessons


    expect(age).toBe(29);
    expect(lessons.length).toBe(2);

    expect(a).toBe(29);
    expect(l.length).toBe(2);
    expect(title).toBe('Nezavisimosti street')
})

