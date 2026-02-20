const { model } = require("mongoose");

const { HoldingSchema } = require("../schemas/HoldingSchema");

const HoldingModel = new model("holding", HoldingSchema); // -> collection name holdings

module.exports = { HoldingModel };
