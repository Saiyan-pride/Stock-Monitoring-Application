const { model, mongoose } = require("mongoose");

const { HoldingSchema } = require("../schemas/HoldingSchema");

const HoldingModel = mongoose.model("holding", HoldingSchema); // -> collection name holdings

module.exports = HoldingModel;
