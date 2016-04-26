'use strict';

import express from 'express';
import User from '../models/user';

let router = express.Router();

////// get list //////
router.get('/', (req, res, next) => {
	User.find({}, (err, users) => {
		if(!err)
			res.status(200).json(users);
		else 
			res.status(500).send("error");
	});
});

////// create new //////
router.post('/', (req, res, next) => {

	let user = req.body;

	User.create(user, (err, result) => {
		res.status(200).json(result);
	});
});

router.put('/:id', (req, res, next) => {
	User.findByIdAndUpdate(req.params.id, {$set: req.body }, (err, result) => {
		if(!err)
			res.status(200).send("Successfully");
		else
			res.status(500).send("error");
	});
});

router.delete('/:id', (req, res, next) => {
	console.log(req.params.id);
	User.remove({ _id: req.params.id }, function(err) {
    if (!err) 
      res.status(200).send("Successfully");
	  else 		
	  	res.status(500).send("error");
	});
});
export default router;