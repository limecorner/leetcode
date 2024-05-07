const express = require('express')
const app = express()

const {
  arr,
  removeDuplicates,
  members,
  removeDuplicateObjects
} = require('./question/removeDuplicates')

// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
  console.log('arr', arr)
  console.log('removeDuplicates arr', removeDuplicates(arr))
  console.log('members', members)
  console.log('removeDuplicateObjects members', removeDuplicateObjects(members))
})
