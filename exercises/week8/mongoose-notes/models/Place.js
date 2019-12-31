//notes pertaining to mongoose specifically, not fully functional
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema ({
    place: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        default: 0
    },
    timeToGo: String,
    sitesToExplore: [String],
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    }
})

module.exports = mongoose.model('Place', placeSchema)