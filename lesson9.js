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
