const batteryStats = require('../models/batteryStats');

module.exports.getData = async (req, res, next) => {
    const stats =  await batteryStats.find({});
    res.status(200).json({
        data: stats
    });
}

module.exports.getLatestStat = async (req, res, next) => {
    const stat =  await batteryStats.findOne().sort({ date: 'desc'}).limit(1)
    res.status(200).json({
        data:stat
    });
}
module.exports.getLatestStatDetection = async (req, res, next) =>{
    
    const stat =  await batteryStats.findOne().sort({ date: 'desc'})

    // var date1 = new Date(stat.date)
    // var date2 = Date.now()
    // var diffTime = Math.abs(date2 - date1);
    var time = stat.syncSchedule;
    time = parseInt(time.substr(0, 2))
    res.render("latest",{
        data:{
            status:stat.status,
            charge:stat.charge,
            current:stat.current,
            temp:stat.temp,
            syncSchedule:time
        }
    })
   
    // res.status(200).json({
    //     status:stat.status,
    //     charge:stat.charge,
    //     current:stat.current,
    //     updated:diffTime * 0.001 + "s Ago"
    // });
}

module.exports.saveData =  (req, res, next) => {
    console.log(req.ip + " saving to server")
    const {device, status, voltage, current, charge, temperature, batteryType, batteryDesignCapacity, batteryCapacity,syncType,syncSchedule} = req.body;
    let errors = false
    if(!device && !status && !voltage && current && !charge && !temperature && !batteryType && !batteryDesignCapacity &&  !batteryCapacity && !syncType && !syncSchedule){
        errors = true
        res.send("sorry")
    }
    else{
        errors = false
    }

    if(!errors){
        const newbatteryStats = new batteryStats({
            device, status, voltage, current, charge, temp:temperature, batteryType, batteryDesignCapacity, batteryCapacity, syncType, syncSchedule
        });


        newbatteryStats.save()
        .then(() => { 
          //  console.log('data saved')
          
            res.send("Data Saved")
        })
        .catch(err => console.log(err))
    }
}