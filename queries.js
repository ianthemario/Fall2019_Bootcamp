/* Add all the required libraries*/
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  var id = 'Library West';
  var query = Listing.find({name: id}, (function(err, result){
    if (!err) {
        // handle result
        console.log(result);
      } else {
        // error handling
        console.log('Could not find Library West');
      };
  }));
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   var id = 'CABL';
   var query = Listing.deleteOne({ code: id }, function (err) {
    if (!err) {
        // handle result
        console.log('Cable Deleted');
      } else {
        // error handling
        console.log('Error did not delete');
      };
   });
};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
   var correctAddr = '1953 Museum Rd, Gainesville, FL 32603';

   var query = Listing.updateOne({ name: 'Phelps Laboratory'}, {address: correctAddr });
  //console.log(query);

  //  var query2 = Listing.find({address: correctAddr}, (function(err, result){
  //   if (!err) {
  //       // handle result
  //       console.log('Phelps Found');
  //       console.log(result);
  //     } else {
  //       // error handling
  //       console.log('Phelps Address NOT updated');
  //     };
  // }));
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find(null,null,function(err,doc){
    console.log(doc);
  });
};
//findLibraryWest();
//removeCable();
updatePhelpsLab();
retrieveAllListings();
