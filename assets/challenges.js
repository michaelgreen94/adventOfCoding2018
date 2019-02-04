// // advent challenge 1

// function hashTable() {
//   this.dataStore = {}
// }

// hashTable.prototype.put = function (key, value) {
//   if (this.dataStore.hasOwnProperty(key)) {
//     throw new Error("duplicate value " + key)
//   }
//   else {
//     this.dataStore[key] = key
//     return this.dataStore
//   }
// }

// var ht = new hashTable()

// function findFreqency(arr) {
//   let currfreq = 0
//   for (let i = 0; i <= arr.length; i++) {
//     if (i == arr.length) {
//       i = 0
//     }
//     let freq = arr[i]
//     ht.put(currfreq)
//     currfreq += freq
//   }
//   return currfreq
// }
// findFreqency(input)

// advent challenge 2

// function checkSum(arr) {
//   let twoArr = []
//   let threeArr = []
//   for (let i = 0; i < arr.length; i++) {
//     let ID = arr[i];
//     let twoCount = 0
//     let threeCount = 0
//     for (let j = 0; j < ID.length; j++) {
//       let ltr = ID[j];
//       let cntr = ID.split(ltr).length - 1
//       if (cntr == 3 && !threeCount) {
//         threeCount += 1
//       }
//       if (cntr == 2 && !twoCount) {
//         twoCount += 1
//       }
//       if (threeCount && twoCount) {
//         twoArr.push(ID)
//         threeArr.push(ID)
//         break
//       }
//       if (j == ID.length - 1) {
//         if (threeCount) {
//           threeArr.push(ID)
//         } else
//           if (twoCount) {
//             twoArr.push(ID)
//           } else { break }
//       }
//     }
//   }
//   return twoArr.length * threeArr.length
// }
// console.log(checkSum(a2Input))

// function checkId(arr) {
//   let found = false
//   let out = []
//   do {
//     for (let i = 1; i < arr.length; i++) {
//       let id = arr[i]
//       let posId = arr[0]
//       let counter = 0
//       for (let j = 0; j < id.length; j++) {
//         let ltr1 = id[j]
//         let ltr2 = posId[j]
//         if (ltr1 != ltr2) {
//           counter += 1
//         }
//         if (counter == 2) {
//           counter = 0
//           break
//         }
//         if (counter == 1 && j == id.length - 1) {
//           found = true
//           out.push(posId)
//           out.push(id)
//         }
//       }
//       if (i == arr.length - 1) {
//         arr.shift()
//         i = 1
//       }
//     }
//   } while (!found)
//   let newOut = []
//   let firstId = out[0]
//   let secondId = out[1]
//   for (let k = 0; k < secondId.length; k++) {
//     let letter = secondId[k]
//     let letter2 = firstId[k]
//     if (letter == letter2) {
//       newOut.push(letter)
//     } else { continue }
//   }
//   return newOut.join('')
// }
// console.log(checkId(a2Input))

// function credit() {
//   let x = 103
//   let y = 108
//   let z = 0
//   let months = 0
//   while (z < .99) {
//     z = (x / y)
//     x += 39
//     y += 39
//     months++
//   }
//   console.log(z)
//   console.log(months)
// }
// credit()

// advent challenge 3

// function hashTable() {
//   this.dataStore = {}
//   this.sqInch = 0
// }

// hashTable.prototype.put = function (key, value) {
//   let cnt = this.dataStore[key]
//   if (this.dataStore.hasOwnProperty(key)) {
//     this.dataStore[key] = cnt += 1
//     if (cnt == 1) {
//       this.sqInch += 1
//     }
//   } else {
//     this.dataStore[key] = value
//   }
//   return this.dataStore
// }

// hashTable.prototype.contains = function (key) {
//   if (this.dataStore[key] > 0) {
//     return true
//   } else {
//     return false
//   }
// }

// var ht = new hashTable()

// function nesting(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let instructions = arr[i]
//     let coordArr = instructions.split(':', 2)
//     let posArr = coordArr[0].split(',', 2)
//     let sizeArr = coordArr[1].trim(' ').split('x', 2)
//     let x = Number(posArr[0])
//     let y = Number(posArr[1])
//     let height = sizeArr[1]
//     let width = sizeArr[0]
//     for (let j = 0; j < height; j++) {
//       for (let k = 0; k < width; k++) {
//         let hashCoord = y + ',' + x
//         ht.put(hashCoord, 0)
//         x += 1
//       }
//       // debugger
//       x = Number(posArr[0])
//       y += 1
//     }
//   }
//   console.log(ht.sqInch)
//   for (let i = 0; i < arr.length; i++) {
//     let instructions = arr[i]
//     let coordArr = instructions.split(':', 2)
//     let posArr = coordArr[0].split(',', 2)
//     let sizeArr = coordArr[1].trim(' ').split('x', 2)
//     let x = Number(posArr[0])
//     let y = Number(posArr[1])
//     let height = sizeArr[1]
//     let width = sizeArr[0]
//     let it = 0
//     let id = i + 1
//     let hashCoord = y + ',' + x
//     for (let j = 0; j < height; j++) {
//       for (let k = 0; k < width; k++) {
//         x += 1
//         hashCoord = y + ',' + x
//         let results = ht.contains(hashCoord)
//         if (results) {
//           it = 1
//         }
//       }
//       x = Number(posArr[0])
//       y += 1
//       hashCoord = y + ',' + x
//       let results = ht.contains(hashCoord)
//       if (results) {
//         it = 1
//       }
//     }
//     if (!it) {
//       console.log(id)
//       return id
//     } else {
//       it = 0
//     }
//   }
// }
// nesting(a3Input)
// // test push from home reconfiguring environment

function findDiameter(num) {
  let area = num
  let rSqred = area / Math.PI
  let r = Math.sqrt(rSqred)
  return Math.round(r * 2)
}
console.log(findDiameter(562))

// advent challenge 4

// let a4Input =