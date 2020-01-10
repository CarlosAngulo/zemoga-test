const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const figureSchema = new Schema({
    name: String,
    quote: String,
    votes: {
        up: Number,
        down: Number,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    },
    update: Date,
    picture: String
})

module.exports = mongoose.model('public-figure', figureSchema);