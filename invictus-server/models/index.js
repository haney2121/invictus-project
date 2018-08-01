const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://haney2121:Gators21@ds253871.mlab.com:53871/invictus", {
  keepAlive: true,
  useNewUrlParser: true 
});

module.exports.User = require("./user");
module.exports.Message = require("./message");
