// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

import {inflate} from "zlib";

export function sum(...nums: Array<number>): number {

    // console.log(nums)
    //console.log(arguments)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce((acc, el) => acc + el, 0)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b < c || a + c < b || c + b < a) {
        return "00"
    }
    if (a === b && b === c) {
        return "10"
    }
    if (a === b || a === c || b === c) {
        return "01"
    }
    if (a !== b && a !== c && b !== c) {
        return "11"
    }
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return ""
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {

    // В return стоит "заглушка", чтоб typescript не ругался
    return number.toString().split("").map(el => +el).reduce((acc, el) => acc + el, 0)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    const odd = arr.reduce((acc, el, currentIndex) => currentIndex % 2 !== 0 ? acc + el : acc, 0)
    const even = arr.reduce((acc, el, currentIndex) => currentIndex % 2 === 0 ? acc + el : acc, 0)

    return even > odd
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    const result = array.filter(el => el >= 0 && Number.isInteger(el))
    return result.map(el => el * el)


}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {

    if (N === 0) {
        return N
    }
    return N + sumFirstNumbers(N - 1)

}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


// export function getBanknoteList(amountOfMoney: number): Array<number> {
//     const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
//     let residue = amountOfMoney
//     const arr = []
//     for (let i = 0; i < banknotes.length; i++) {
//         const integer = Math.trunc(residue / banknotes[i])
//         if (integer > 0) {
//             residue = residue - integer * banknotes[i]
//
//             for (let j = 0; j < integer; j++) {
//                 arr.push(banknotes[i])
//             }
//         }
//
//     }
//     return arr
// }


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let result: Array<number> = [],
        i: number = 0;
    while (i < banknotes.length) {
        if ((amountOfMoney - banknotes[i]) < 0) {
            i++
        } else {
            amountOfMoney -= banknotes[i]
            result.push(banknotes[i])
        }
    }
    return result;
}


