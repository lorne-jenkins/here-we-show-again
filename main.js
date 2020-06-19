// contributions from khalil, jeri, georgette


const mainElement = document.querySelector('.Katas-List')
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

// Kata 1
const kata1Heading = document.createElement('h3')
mainElement.append(kata1Heading)
kata1Heading.append(`Kata 1: \r`)
let kata1Array = []
for (let counter = 1; counter <= 20; counter ++) {
    kata1Array.push(counter)
}
kata1Heading.append(kata1Array)

// Kata 2
const kata2Heading = document.createElement('h3')
mainElement.append(kata2Heading)
kata2Heading.append(`Kata 2: \r`)
let kata2Array = []
for (let counter = 2; counter <= 20; counter += 2) {
    kata2Array.push(counter)
}
kata2Heading.append(kata2Array)

// Kata 3
const kata3Heading = document.createElement('h3')
mainElement.append(kata3Heading)
kata3Heading.append(`Kata 3: \r`)
let kata3Array = []
for (let counter = 1; counter <= 20; counter += 2) {
    kata3Array.push(counter)
}
kata3Heading.append(kata3Array)

// Kata 4
const kata4Heading = document.createElement('h3')
mainElement.append(kata4Heading)
kata4Heading.append(`Kata 4: \r`)
let kata4Array = []
for (let counter = 5; counter <= 100; counter += 5) {
    kata4Array.push(counter)
}
kata4Heading.append(kata4Array)

// Kata 5
const kata5Heading = document.createElement('h3')
mainElement.append(kata5Heading)
kata5Heading.append(`Kata 5: \r`)
let kata5Array = []
for (let counter = 1; counter <= 10; counter++) {
    kata5Array.push(counter * counter)
}
kata5Heading.append(kata5Array)

// Kata 6
const kata6Heading = document.createElement('h3')
mainElement.append(kata6Heading)
kata6Heading.append(`Kata 6:  \r`)
let kata6Array = []
for (let counter = 20; counter >= 1; counter--) {
    kata6Array.push(counter)
}
kata6Heading.append(kata6Array)

// Kata 7
const kata7Heading = document.createElement('h3')
mainElement.append(kata7Heading)
kata7Heading.append(`Kata 7: \r`)
let kata7Array = []
for (let counter = 20; counter >= 2; counter -= 2) {
    kata7Array.push(counter)
}
kata7Heading.append(kata7Array)

// Kata 8
const kata8Heading = document.createElement('h3')
mainElement.append(kata8Heading)
kata8Heading.append(`Kata 8: \r`)
let kata8Array = []
for (let counter = 19; counter >= 2; counter -= 2) {
    kata8Array.push(counter)
}
kata8Heading.append(kata8Array)

// Kata 9
const kata9Heading = document.createElement('h3')
mainElement.append(kata9Heading)
kata9Heading.append(`Kata 9: \r`)
let kata9Array = []
for (let counter = 100; counter >= 5; counter -= 5) {
    kata9Array.push(counter)
}
kata9Heading.append(kata9Array)

// Kata 10
const kata10Heading = document.createElement('h3')
mainElement.append(kata10Heading)
kata10Heading.append(`Kata 10: \r`)
let kata10Array = []
for (let counter = 10; counter >= 1; counter--) {
    kata10Array.push(counter * counter)
}
kata10Heading.append(kata10Array)

// Kata 11
const kata11Heading = document.createElement('h3')
mainElement.append(kata11Heading)
kata11Heading.append(`Kata 11: \r`)
kata11Heading.append(sampleArray)

// Kata 12
const kata12Heading = document.createElement('h3')
mainElement.append(kata12Heading)
kata12Heading.append(`Kata 12: \r`)
let kata12Array = []
for (let counter = 0; counter < sampleArray.length; counter++) {
    const sampleArrayElement = sampleArray[counter];
    if (!(sampleArrayElement % 2)) {
        kata12Array.push(sampleArrayElement)
    }
}
kata12Heading.append(kata12Array)

// Kata 13
const kata13Heading = document.createElement('h3')
mainElement.append(kata13Heading)
kata13Heading.append(`Kata 13: \r`)
let kata13Array = []
for (let counter = 0; counter < sampleArray.length; counter++) {
    const sampleArrayElement = sampleArray[counter];
    if (sampleArrayElement % 2) {
        kata13Array.push(sampleArrayElement)
    }
}
kata13Heading.append(kata13Array)

// Kata 14
const kata14Heading = document.createElement('h3')
mainElement.append(kata14Heading)
kata14Heading.append(`Kata 14: \r`)
let kata14Array = []
for (let counter = 0; counter < sampleArray.length; counter++) {
    const sampleArrayElement = sampleArray[counter];

    kata14Array.push(sampleArrayElement * sampleArrayElement)
}
kata14Heading.append(kata14Array)

// Kata 15
const kata15Heading = document.createElement('h3')
mainElement.append(kata15Heading)
kata15Heading.append(`Kata 15: \r`)
let numSum = 0
for (let counter = 1; counter <= 20; counter++) {
    numSum = numSum + counter
}
kata15Heading.append(numSum)
// Kata 16
const kata16Heading = document.createElement('h3')
mainElement.append(kata16Heading)
kata16Heading.append(`Kata 16: \r`)
let numSumKata16 = 0
for (let counter = 0; counter < sampleArray.length; counter++) {
    numSumKata16 = numSumKata16 + sampleArray[counter]
}
kata16Heading.append(numSumKata16)

// Kata 17
const kata17Heading = document.createElement('h3')
mainElement.append(kata17Heading)
kata17Heading.append(`Kata 17: \r`)
let kata17Array = sampleArray.sort(function (a, b) { return a - b })
kata17Heading.append(kata17Array[0])


// Kata 18
const kata18Heading = document.createElement('h3')
mainElement.append(kata18Heading)
kata18Heading.append(`Kata 18: \r`)
let kata18Array = sampleArray.sort(function (a, b) { return a - b })
kata18Heading.append(kata18Array[sampleArray.length - 1])