const repeatString = (str, num, sep) => {
    return Array(num).fill(str).join(sep)

}
console.log(repeatString("yo", 3, ","))


const checkStart = (str, check) => {
    const regexp = new RegExp(`${check}`,"i");
    return regexp.test(str)

}
console.log(checkStart("Incubator", "inc"))
console.log(checkStart("Incubator", "yo"))


const truncateString = (str, num) => {
    return str.slice(0, num) + "..."
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))


const getMinLengthWord = (str) => {

    if (typeof str !== "string" || !str) {
        return null
    }
    const arr = str.split(" ").sort((a, b) => {
        return a.length - b.length
    })
    return arr[0]
}
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи."))
console.log(getMinLengthWord(""))
console.log(getMinLengthWord(123))


const setUpperCase = (str) => {
    return str.toLowerCase().split(" ").map(el => {
            return el.charAt(0).toUpperCase() + el.slice(1)
        }
    ).join(" ")
}


console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ"))


const isIncludes = (str, sub) => {
    const arr = str.toLowerCase().split("")
    const subArr = sub.toLowerCase().split("")

    for (let i = 0; i < subArr.length; i++) {
        const current = subArr[i]
        const index = arr.indexOf(current)

       if (index === -1) {
           return false
       } else {
           delete arr[index]
       }
    }
    return true

}

console.log(isIncludes("Incubator", "Cut"))
console.log(isIncludes("Incubator", "table"))
console.log(isIncludes("Incubator", "table"))  //=> false
console.log(isIncludes("Incubator", "inbba")) //true //*false
console.log(isIncludes("Incubator", "inba"))  // true  //*true
console.log(isIncludes("Incubator", "Incubatorrr")) //true //*false



