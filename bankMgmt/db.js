const mongoose =
require("mongoose");

mongoose.connect(
"mongodb://127.0.0.1:27017/bankDB"
)

.then(() => {

console.log(
"MongoDB Connected"
);

})

.catch((error) => {

console.log(error);

});