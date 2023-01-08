import {mult, summ} from "./01";

test('sum should be correct', () => {
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result1 = summ(a,b);
    const result2 = summ(b,c);

    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test('multiply should be correct', () => {
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result1 = mult(a,b);
    const result2 = mult(b,c);

    //expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})