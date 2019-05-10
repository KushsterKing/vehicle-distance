import mongoose from "mongoose";

import Vehicle from './Vehicle'

import constants from '../constants'

mongoose.connect(constants.mongoURL, {useNewUrlParser: true});

export {Vehicle}