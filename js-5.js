const name1 = ["Bob", "Alex", "Donald"]
console.log(name1.sort())

//1. сортирует строки из коробкиБ те без доп параметров


const name2 = ["Donald", "aLEX", "Alex", "alex", "игорь", "Юрий"]
console.log(name2.sort())

//2. сортирует строки типа по алфавиту (unicode)
//3. метод сорт работает мутабельно
//4. возращает ссылку на исходный массив
//5. для остальных случаев необходимо передавать функцию сравнения (callback)
//6. функция сравнения должна возращать число больше или меньше 0
//7. вместе с sort  часто используют reverse


console.log(name1)
console.log(name1.sort() === name1) // true


const numbers = [1000, 4, 22, 6780, -1]
console.log(numbers.sort())

// const compareFunc = (a, b) => { // по возрастанию
//     // > 0 - надо переставить
//     // < 0 -порядок не меняем
//     if (a> b) {
//         return 999
//     } else {
//         return -0
//     }
// }
// console.log(numbers.sort(compareFunc))


const compareFunc = (a, b) => a - b
console.log(numbers.sort(compareFunc))
console.log(numbers.reverse())


const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 24,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
];

const sortByName = (a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1
    }
    return -1
}

console.log(students.sort(sortByName))
console.log(students.sort((a, b) =>
    a.name.localeCompare(b.name)))

console.log(students.sort((a, b) => a.age - b.age))


// Почитай про O(n) - оценка сложности алгоритмов, например, сортировки
// Это тип насколько сложный алгоритм


//bubble sort
//
const nums = [23, 46, 17, 11, 99, 34]// n-1 operation

for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j; i++) {
        if (nums[i] > nums[i + 1]) {

                // let temp = nums[i]
                // nums[i] = nums[i + 1]
                // nums[i + 1] = temp
                [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]
            isSorted = false

        }
    }
    if (isSorted) break
}

console.log(nums)