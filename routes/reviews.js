// importing required packages
const express = require('express');
const reviewsController = require('../controllers/review_controller');

// setting up express
const router = express.Router();

// setting up route for different requests
router.post('/assign-review/:id', reviewsController.assignReview);
router.post('/create/:id', reviewsController.submitReview);
router.post('/update-review/:id', reviewsController.updateReview)

module.exports = router;
