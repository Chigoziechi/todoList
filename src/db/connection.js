const sqlite = require('sqlite3').verbose()
const path = require('path')

const db = new sqlite.Database(path.resolve (__dirname,"../db/test.db"), sqlite.OPEN_READWRITE,(err)=>{
    if(err) return console.error(err.message)
   })

module.exports = db;