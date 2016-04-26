'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username: String,
  password: String
});

export default mongoose.model('User', userSchema);