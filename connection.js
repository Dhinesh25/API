const {Client} = require('pg')

const client = new Client({
    host: "ec2-52-204-195-41.compute-1.amazonaws.com",
    user: "qrqjstgyvvrjxm",
    port: 5432,
    password: "86dbf546ccc11e615558f1192394cf6cfcc60c9914aee6d458be5fe6c5837682",
    database: "dbqokr1g5f2h7s",
    ssl:{
        rejectUnauthorized: false
    }
})

module.exports = client
