// // let grid = 4
// // let arrOfNum = []
// // for (let i = 1; i <= grid * grid; i++) {
// //   arrOfNum.push(i)
// // }
// // console.log(arrOfNum);
// // let random = []
// // for (let i = arrOfNum.length; i > 0; i--) {
// //   let rNum = Math.floor(Math.random() * i)
// //   // console.log(rNum);
// //   random.push(...arrOfNum.splice(rNum, 1))
// // }
// // console.log(random);

// let grid = 2
//     let arrOfNum = []
//     for (let i = 1; i < grid * grid; i++) {
//       arrOfNum.push(i)
//     }
//     arrOfNum.push('kosong')
//     // create random arr of num
//     let random = []
//     for (let i = arrOfNum.length; i > 0; i--) {
//       let rNum = Math.floor(Math.random() * i)
//       random.push(...arrOfNum.splice(rNum, 1))
//     }

//     // let board = ''
//     let arrOfboard = []
//     for (let i = 1; i <= grid; i++) {
//       const arrOfKotak = []
//       arrOfKotak.push(`<div class="column" id="col${i}">`)
//       for (let j = 0; j < grid ; j++) {
//         let n = random.shift()
//         if (n === 'kosong') {
//           arrOfKotak.push(`<div class="board-ver" id="kosong"><span> k </span></div>`)
//           continue;
//         }
//         arrOfKotak.push(`<div class="board-ver" id="kotak${n}"><span> ${n} </span></div>`)
//       }
//       arrOfKotak.push('</div>')
//       arrOfboard.push(arrOfKotak)
//     }
//     console.log(arrOfboard);

let grid = 2
    let arrOfNum = []
    for (let i = 1; i < grid * grid; i++) {
      arrOfNum.push(i)
    }
    arrOfNum.push('kosong')
    // create random arr of num
    let random = []
    for (let i = arrOfNum.length; i > 0; i--) {
      let rNum = Math.floor(Math.random() * i)
      random.push(...arrOfNum.splice(rNum, 1))
    }
    // create object 
    let objOfboard = {}
    for (let i = 1, nomer = 1; i <= grid; i++) {
      const objOfKotak = {}
      let buka = 'buka'
      objOfKotak[buka] = `<div class="column" id="col${i}">`
      objOfKotak.arrKotak = []
      for (let j = 0; j < grid ; j++) {
        let n = random.shift()
        if (n === 'kosong') {
          objOfKotak.arrKotak.push(`<div class="board-ver" id="kosong"><span> k </span></div>`)
          nomer++
          continue;
        }
        objOfKotak.arrKotak.push(`<div class="board-ver" id="kotak${n}"><span> ${n} </span></div>`)
        nomer++
      }
      let tutup = 'tutup'
      objOfKotak[tutup] = '</div>'
      let ver = 'ver' + i
      objOfboard[ver] = objOfKotak
    }
    console.log(objOfboard);