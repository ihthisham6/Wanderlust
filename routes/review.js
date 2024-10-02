const express= require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/Expresserror.js");
const{validateReview,isLoggedIn, isReviewAuthor} = require("../middleware.js");

const Review = require("../models/review.js");
const reviewController = require("../controllers/reviews.js");
const Listing = require('../models/listing.js'); // Import the Listing model correctly

//const Listing= require("../routes/listing.js");

//reviews
//post review route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));
    
     
    //delete route for reviews
    router.delete("/:reviewId",isLoggedIn,
      isReviewAuthor,
        wrapAsync(reviewController.destroyReview));


    module.exports=router;