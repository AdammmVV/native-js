

const icreaseAge = (u: userType) => {
    u.age++
}

type userType = {
    name: string
    age: number
}

test('big test', () => {
    let user:userType ={
        name: 'Adammm',
        age: 29
    }

    icreaseAge(user)
    expect(user.age).toBe(30)

    const superMan = user;
    superMan.age = 1000;

    expect(user.age).toBe(1000  )
})