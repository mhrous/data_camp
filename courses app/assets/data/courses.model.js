const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  description: String,
  href: String,
  length: String,
  done: Boolean
});

coursesSchema.statics.add = function(obj) {
  return this.create(obj);
};

coursesSchema.statics.getAll = function() {
  return this.find({})
    .sort({ name: 1 })
    .lean()
    .exec();
};

coursesSchema.statics.update = function(id, newObj) {
  console.log(id);
  return this.findByIdAndUpdate(id, newObj, {
    new: true
  })
    .lean()
    .exec();
};

module.exports = mongoose.model("courese", coursesSchema);
