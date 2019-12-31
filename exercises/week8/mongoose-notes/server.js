//notes pertaining to mongoose specifically, not fully functional
const express = require('express')
const mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost:27017/vacationPlanner', {useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => {
	console.log('MongoDB is Connected')
	})
	.catch(err => {
		console.log(err)
	})
