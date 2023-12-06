const mogoose = require("mongoose");

const { DB_CON_STRING } = process.env;

module.exports = () => {
  // mogoose.connect("mongodb://localhost/ecommerce")
  // mogoose.connect("mongodb+srv://abidrazaa:Abcd1234@cluster0.lr2rk.mongodb.net/?retryWrites=true&w=majority")
  //     .then(() => console.log('DB Connection Successfull'))
  //     .catch(err => console.log(err.message))
  mogoose
    .connect(
      "mongodb+srv://kdsingh999:HDTCwban6XJfnK0u@cluster0.kq1wddy.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("DB Connection Successfull"))
    .catch((err) => console.log(err.message));
};
