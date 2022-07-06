const Razorpay = require('razorpay'); 
const express = require('express');
const Router = express.Router();
const razorpayInstance = new Razorpay({  
	// Replace with your key_id
	key_id: 	,

	// Replace with your key_secret
	key_secret: 
});


Router.post('/createorder', async(req,res)=>{
	const {amount,currency,receipt, notes}  = req.body; 
});
Router.get('/files', getFiles);


