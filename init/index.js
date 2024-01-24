const mongoose = require("mongoose");
const initData = require("./data.js");
//const listing = require("./models/listing.js");
const Listing = require("../models/listing.js");

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/YourDestiny");
};

const initDb = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: '659456aef364eeff7a022469'}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDb();