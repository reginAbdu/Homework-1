// const fs = require('fs-extra')
// const dir1 = '../folder1'
// const file = '../folder1/file.txt'
// const dir2 = '../folder2'
// const src = '../folder1/file.txt'
// const dest = '../folder2/file.txt'
// //Create folder
// async function create_folder1 (directory) {
//     try {
//       await fs.ensureDir(directory)
//       console.log('success!')
//     } catch (err) {
//       console.error(err)
//     }
//   }
//   create_folder1(dir1)

// //Create file
// async function create_file (f) {
//     try {
//       await fs.ensureFile(f)
//       console.log('success!')
//     } catch (err) {
//       console.error(err)
//     }
//   }
  
//   create_file(file)

// //Create another folder
// async function create_folder2 (directory) {
//     try {
//       await fs.ensureDir(directory)
//       console.log('success!')
//     } catch (err) {
//       console.error(err)
//     }
//   }
//   create_folder2(dir2)

// //move file from folder1 to folder2
// async function example (src, dest) {
//     try {
//       await fs.move(src, dest)
//       console.log('success!')
//     } catch (err) {
//       console.error(err)
//     }
//   }
  
//   example(src, dest)

// //remove file
// async function example (src, dest) {
//     try {
//       await fs.remove('/Users/regina/Documents/fse/folder2/file.txt')
//       console.log('success!')
//     } catch (err) {
//       console.error(err)
//     }
//   }
  
//   example()

// //remove folder1, folder2
// async function example (src, dest) {
//     try {
//       await fs.remove('/Users/regina/Documents/fse/folder1')
//       await fs.remove('/Users/regina/Documents/fse/folder2')
//       console.log('success!')
//     } catch (err) {
//       console.error(err)
//     }
//   }
  
//   example()

const fs = require('fs-extra')
const dir1 = './folder1'
const src = './folder1/file.txt'
const dir2 = './folder2'
const dest = './folder2/file.txt'
//Create folder
fs.ensureDir(dir1, err => {
    if (err) return console.error(err)
    console.log('success!')
})

//Create file
fs.ensureFile(src, err => {
    if (err) return console.error(err)
    console.log('success!')
})


//Create another folder
fs.ensureDir(dir2, err => {
    if (err) return console.error(err)
  console.log('success!')
})

//THIS STEP FAILS, HAVEN'T FOUND A REASON WHY(move file from folder1 to folder2)
fs.move(src, dest, err => {
  if (err) return console.error(err)
  console.log('success!')
})

//remove file
fs.remove(dest, err => {
  if (err) return console.error(err)
  console.log('success!')
})


//remove folder1, folder2
fs.remove(dir1, err => {
  if (err) return console.error(err)
  console.log('success!')
})
fs.remove(dir2, err => {
  if (err) return console.error(err)
  console.log('success!')
})