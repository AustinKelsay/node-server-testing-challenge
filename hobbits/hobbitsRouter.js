const express = require("express");
const router = express.Router();

const Hobbits = require("./hobbitsModel");

router.get("/", (req, res) => {
  Hobbits.get()
    .then((hobbits) => {
      res.status(200).json(hobbits);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.post("/", (req, res) => {
  const hobbit = req.body;
  console.log(hobbit);
  Hobbits.add(hobbit)
    .then((newHobbit) => {
      res.status(200).json(newHobbit);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});
module.exports = router;