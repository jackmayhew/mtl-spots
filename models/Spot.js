const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    location: {
        type: String,
        required: true,
    }

})
module.exports = mongoose.models.Spot || mongoose.model('Spot', SpotSchema)
