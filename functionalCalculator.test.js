import {suma, resta, sumar, restar, multiplicar, dividir} from './functionalCalculator'

describe('All Test', () => {

    // Arrays functional operations tests:

    test('Array sum', ()=>{

        const expected = 4;
        const result = suma([2,2]);
        expect(expected).toEqual(result);

    });

    test('Array subtraction', ()=>{

        const expected = 6;
        const result = resta([8,2]);
        expect(expected).toEqual(result);

    });

    // Numbers functional operations tests:

    test('functional sum', ()=>{

        const expected = 10;
        const result = sumar(8,2);
        expect(expected).toEqual(result);

    });

    test('functional substract', ()=>{

        const expected = 6;
        const result = restar(8,2);
        expect(expected).toEqual(result);

    });

    test('functional multiplication', ()=>{

        const expected = 16;
        const result = multiplicar(8,2);
        expect(expected).toEqual(result);

    });

    test('functional division', ()=>{

        const expected = 4;
        const result = dividir(8,2);
        expect(expected).toEqual(result);

    });

    test('functional division : division by zero', ()=>{

        const expected = "Indeterminado";
        const result = dividir(8,0);
        expect(expected).toBe(result);

    });

});