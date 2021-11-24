import {compose} from '../compose'

describe("Функция compose работает корректно", () => {
    const sum = (num: number) => {
        return num*10
    }
    const sum2 = (num: number) => {
        return num*10
    }
    test('Возвращает верный результат при вычислении', () => {
        expect(compose([sum, sum2])!(5)).toBe(500)
    })
    test('Возвращает функцию', () => {
        expect(typeof compose([sum, sum2])).toBe('function')
    })
    test('Возвращает null, если не переданы аргументы', () => {
        expect(compose([])(10)).toBe(null)
    })
})