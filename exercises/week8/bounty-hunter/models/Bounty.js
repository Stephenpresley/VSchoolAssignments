const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName:  {
        type: String,
        required: true
    },
    living: Boolean,
    bountyAmount: {
        type: Number,
        required: true
    },
    type:  String
})

module.exports = mongoose.model('Bounty', bountySchema)