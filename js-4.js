
const todolistId_1 = "12sdf-234fg"
const todolistId_2 = "12dgg-45gbb"

const todolist = [
    {
        id: todolistId_1,
        title: "What to learn",
        filter: "all",


    },
    {
        id: todolistId_2,
        title: "What to buy",
        filter: "all",

    },
]

const getKey =() => "user name"


const tasks = { //"12sdf-234fg"
    [todolistId_1]: [ //used expression
        {id: 1, title: "HTMl", isDone: false},
        {id: 2, title: "Css", isDone: false},
        {id: 3, title: "React", isDone: false},
        ],
    [todolistId_2] :
        [
        {id: 4, title: "bread", isDone: false},
        {id: 5, title: "Milk", isDone: false},
        {id: 6, title: "Chicken", isDone: false},
        ],
    [getKey()]: [] // "user name"

}

console.log(tasks[todolist[0].title].id[0].title)

//reduce => свертка =>одно значение


const nums = [2, 4, 6, 5]

nums.reduce((acc,el) => {
    return acc + el
}, 0)
//0, 2 => 2
//2, 4 => 6
//6, 6 => 12
//12, 5 => 17
//=> 17


nums.reduce((acc, el) => acc > el? acc: el)
let students = [
    {   id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 26,
        isMarried: false,
        scores: 100
    }
];

const newData = {
    "1": {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85

    },
    "2" : {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },

}

 const data =students.reduce((acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc

}, {})
console.log(data)


const st20 = students.map(s => ({...s,scores: s.scores + 20}))
console.log(st20)

const st20reduce = students.reduce((acc, el) => {
    const copy ={...el}
    copy.scores =el.scores+ 20
    acc.push(copy)
    return acc
}, [])


