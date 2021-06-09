const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter a name for transaction"
    },
    value: {
      type: Number,
      required: "Enter an amount"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);
 // why would we use that date type as opposed to:
 // day: {type: Date, default: ()=> new Date()}


const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
