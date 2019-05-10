import express from 'express'

import getDistance from './helpers/calculateDistance'

import {Vehicle} from './models'

const app = express();
app.get('/', async (req, res) => {

    const vehicle = await Vehicle.findOne({VehicleNo: req.query.VehicleNo});

    const distance = getDistance(vehicle.Lat, vehicle.Long, req.query.Lat, req.query.Long);

    console.log(distance);
    res.send(distance.toString())
});
app.listen(3000, () => {
    console.log('connected to port 3000')
});