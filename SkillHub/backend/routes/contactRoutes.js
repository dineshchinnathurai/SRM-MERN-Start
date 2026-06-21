const express =
require("express");

const router =
express.Router();

const {
  saveMessage,
  getMessages
}
=
require(
  "../controllers/contactController"
);


// SAVE MESSAGE

router.post(
  "/",
  saveMessage
);


// GET ALL MESSAGES

router.get(
  "/",
  getMessages
);

module.exports = router;









// const express =
// require("express");

// const router =
// express.Router();

// const {
//   saveMessage
// }
// =
// require(
//   "../controllers/contactController"
// );

// router.post(
//   "/",
//   saveMessage
// );

// module.exports = router;