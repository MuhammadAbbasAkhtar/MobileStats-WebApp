const express = require('express')
const router = express.Router()
const statsController = require('../controllers/statsController');
//batteryStats Model
const batteryStats = require('../models/batteryStats')

router.get('/', (req, res) =>{
    //console.log(req.ip + " visted router server")
    res.send("Yo!")
})
//data-now


router.get('/summary', statsController.getData);
router.get('/summary/new', statsController.getLatestStat);
router.get('/summary/latest/detection', statsController.getLatestStatDetection);
router.post('/saveInfo', statsController.saveData)

//BatteryStats
module.exports = router; 