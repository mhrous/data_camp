const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  description: String,
  href: String,
  
  done: Boolean
});

projectSchema.statics.add = function(obj) {
  return this.create(obj);
};

projectSchema.statics.getAll = function() {
  return this.find({})
    .sort({ name: 1 })
    .lean()
    .exec();
};

projectSchema.statics.update = function(id, newObj) {
  console.log(id);
  return this.findByIdAndUpdate(id, newObj, {
    new: true
  })
    .lean()
    .exec();
};

module.exports = mongoose.model("project", projectSchema);
