const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    user: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Task', TaskSchema)