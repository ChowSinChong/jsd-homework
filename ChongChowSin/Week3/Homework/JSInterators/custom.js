function onlyEven(nums){
    console.log("OnlyEven Function")
    console.log(`Starting for forEach`)
    nums.forEach(element => {
        if(element % 2 == 0)
            console.log(element)
    });
    console.log(`End for forEach`)

    console.log(`Start for filter`)
    let evenNums = nums.filter(element => {
        return element % 2 == 0
    })
    // or
    // let evenNums = nums.filter(element => element % 2 ==0)

    console.log(`Filter output: ${evenNums}`)
    console.log(`End for filter`)
}
onlyEven([1,2,3,4,5,6,7])

function countIntegers(nums){
    console.log("CountIntegers Function")
    console.log(`Starting for forEach`)
    let numCount = 0
    nums.forEach(element => {
        if(Number.isInteger(element))
            numCount++
    });
    console.log(numCount)
    console.log(`End for forEach`)

    console.log(`Start for filter`)
    let intNums = nums.filter(element => {
        return Number.isInteger(element)
    })
    // or
    // return (nums.filter(element => Number.isInteger(element))).length
    console.log(`Filter output: ${intNums.length}`)
    console.log(`End for filter`)
}
countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4])

function lengths(arr){
    console.log("Lengths Function")
    return arr.map(element => {
        return element.length
    })
}

console.log(lengths(['my', 'cake', 'pudding']))

function getSquares(arr){
    console.log("GetSquares Function")
    console.log(`Starting for forEach`)
    arr.forEach(element => {
        console.log(element*element)
    });
    console.log(`End for forEach`)

    console.log(`Starting for map`)
    let squares = arr.map(element => {
        return element*element
    })
    console.log(squares)
    console.log(`End for map`)
}
getSquares([1, 2, 3, 4, 5])

var inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
]

function machineOnly(inventories){
    return inventories.filter(element => {
        return element.type == "machine"
    })
}

function totalValue(arr){
    return arr.reduce((preValue, element) => {
        return preValue += element.value
    },0)
}
// or
// function totalValue(inventory){
//     return inventory
//         .filter(item => item.type === 'machine')
//         .reduce((total, machine) => { return total+= machine.value}, 0)
// }
// console.log(
// totalValue(inventory)
// )

function valueOver500(machines){
    return machines.filter(element => {
        return element.value > 500
    })
}
// or
// function valueOver500(inventory){
//     return inventory.filter(item => item.type === 'machine' && item.value > 500)
// }

// console.log(valueOver500(inventory))

console.log("Machine Function")
let machines = machineOnly(inventory)
console.log(machines)

console.log(`Total Value: ${totalValue(machines)}`)
let machines500 = valueOver500(machines)
console.log(`Value Over 500: `, machines500)