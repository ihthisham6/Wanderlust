const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/Expresserror.js");
const {listingSchema,reviewSchema} = require("./schema.js");
module.exports.isLoggedIn=(req,res,next) => {

 if(!req.isAuthenticated()){
  //redirectUrl save
  req.session.redirectUrl= req.originalUrl;
    req.flash("error","you must be logged in to create listing!");
  return res.redirect("/login");
}
next();
}


module.exports.saveRedirectUrl= (req,res,next) => {
  if(req.session.redirectUrl){
    res.locals.redirectUrl= req.session.redirectUrl;
  }
  next();
};






module.exports.isOwner = async(req,res,next) => {
  let { id } = req.params;  // Get the id from the route params
    id = id.trim();

    let listing = await  Listing.findById(id);
    if(!res.locals.currUser && listing.owner.id.equals(res.locals.currUser.id)){

req.flash("error","You are not the owner of this listing");
return res.redirect(`/listings/${id}`);
    }
    next();
};


module.exports.validateListing = (req,res,next) =>{

  let {error}= listingSchema.validate(req.body);
  
  if(error){
      let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400,errMsg);
  }else{
      next();
  }
};



module.exports.validateReview = (req,res,next) =>{

  let {error}= reviewSchema.validate(req.body);
  
  if(error){
      let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400,errMsg);
  }else{
      next();
  }
};




module.exports.isReviewAuthor = async(req,res,next) => {
  let {id, reviewId } = req.params;  // Get the id from the route params
    id = id.trim();

    let listing = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser.id)){

req.flash("error","You are not the author of this review");
return res.redirect(`/listings/${id}`);
    }
    next();
};