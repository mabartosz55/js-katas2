let bodyElement = document.querySelector("body")
let currentArray = []

for (let index = 1; index <=20; index = index +1){
    currentArray.push(index)
}

createAppend("kata 1")

function createAppend(header){
    let newHead = document.createElement("h3")
    newHead.append(header)
    bodyElement.append(newHead)
}

function newDiv (body){
    let newDiv = document.createElement("div")
    newDiv.append(body)
    bodyElement.append(newDiv)

}
newDiv(currentArray.join(", "))

createAppend("kata 2")

currentArray = []
for (let index2 = 0; index2 <= 20; index2 = index2 + 2){
    currentArray.push(index2)

}
newDiv(currentArray.join(", "))

createAppend("kata 3")

currentArray = []
for (let index3 = 1; index3 <= 20; index3 = index3 + 2){
    currentArray.push(index3)

}
newDiv(currentArray.join(", "))

createAppend("kata 4")

currentArray = []
for (let index4 = 5; index4 <= 100; index4 = index4 +5){
    currentArray.push(index4)

}
newDiv(currentArray.join(", "))

createAppend("kata 5")

currentArray = []
for (let index5 = 1; index5 <= 10; index5 = index5 + 1){
    currentArray.push(index5 ** 2)

    // let counter5 = 1
    // while (counter5 <= 10) {
    //   console.log(counter5 ** 2)
    //   counter5 += 1
    // }

}
newDiv(currentArray.join(", "))

createAppend("kata 6")

currentArray = []
for (let index6 = 20; index6 >= 1; index6 = index6 -= 1){
    currentArray.push(index6)

//     let counter6 = 20
//   while (counter6 >= 1) {
//     console.log(counter6)
//     counter6 -=1
//   }

}
newDiv(currentArray.join(", "))



// function createAppend(header){
//     let newHead = document.createElement("h3")
//     newHead.append(header)
//     bodyElement.append(newHead)
// }

// function newDiv2 (body){
//     let index2 = 0; index2 <= 20; index2 = index2 + 2
//     let newDiv2 = document.createElement("div")
//     newDiv2.append(body)
//     bodyElement.append(newDiv2)

// }

// newDiv(currentArray.join(", "))



// console.log(bodyElement)