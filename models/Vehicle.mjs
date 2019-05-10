import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Vehicle = new Schema({
    VehicleNo: {type: String, required: true},
    Imei: {type: String},
    Location: {type: String},
    Date: {type: Date},
    Tempr: {type: String},
    Ignition: {type: String},
    Lat: {type: String},
    Long: {type: String},
    Speed: {type: String},
    Angle: {type: String}
});

export default mongoose.model('Vehicle', Vehicle );