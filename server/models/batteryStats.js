const mongoose = require('mongoose')
const BatteryStatsSchema = new mongoose.Schema({
    device:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    voltage:{
        type: String,
        required: true
    },
    current:{
        type: String,
        required: true
    },
    charge:{
        type: String,
        required: true
    },
    temp:{
        type: String,
        required: true
    },
    batteryType:{
        type: String,
        required: true
    },
    batteryDesignCapacity:{
        type: String,
        required: true
    },
    batteryCapacity:{
        type: String,
        required: true
    },
    syncType:{
        type: String,
        required: true
    },
    syncSchedule:{
        type:String,
        required:false
    },
    date:{
        type: Date,
        default: Date.now
    },

})

const batteryStats = mongoose.model('batteryStats',BatteryStatsSchema)

module.exports = batteryStats