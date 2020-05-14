const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    status: {
        type: String
    },
    owner: {
        type: String
    }
})

module.exports = Task = mongoose.model('tasks', TaskSchema)