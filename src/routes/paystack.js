const express = require("express");
const request = require("request");
const _ = require("lodash");
const path = require("path");
const authMiddleware = require("../middleware/authMiddleware");
const CakeModel = require("../models/Order");
const { initializePayment, verifyPayment } = require("../config/paystack")(
  request
);

const router = express.Router();

router.post("/pay", authMiddleware, (req, res) => {
  const form = _.pick(req.body, [
    "amount",
    "email",
    "name",
    "color",
    "size",
    "note",
    "delivery_date",
  ]);
  form.email = req.user.email;
  form.metadata = {
    name: form.name,
    color: form.color,
    size: form.size,
    amount: form.amount,
    note: form.note,
    delivery_date: form.delivery_date,
  };
  form.amount *= 100; //Paystack calculates in Kobo

  initializePayment(form, (error, body) => {
    if (error) {
      return res.json({
        status: "failed",
        msg: error,
      });
    }
    response = JSON.parse(body);
    // res.redirect(response.data.authorization_url)
    res.json({
      status: "success",
      msg: response.data.authorization_url,
    });
  });
});

router.get("/callback", authMiddleware, (req, res) => {
  const ref = req.query.reference;
  verifyPayment(ref, (error, body) => {
    if (error) {
      return res.status(400).json({
        status: "failed",
        msg: error,
      });
    }
    response = JSON.parse(body);

    const data = _.at(response.data, [
      "reference",
      "amount",
      "customer.email",
      "metadata.name",
      "metadata.color",
      "metadata.note",
      "metadata.size",
      "metadata.delivery_date",
    ]);

    [reference, amount, email, name, color, note, size, delivery_date] = data;

    newCake = {
      reference,
      amount: amount/100,
      email,
      name,
      note,
      color,
      size,
      delivery_date,
    };

    const cake = new CakeModel(newCake);

    cake.paid = true;
    cake.user = req.user._id;


    cake
      .save()
      .then((cake) => {
        if (!cake) {
          return res.json({
            status: "failed",
            msg: error,
          });
        }
        return res.json({
          status: "success",
          msg: "/receipt/" + cake._id,
        });
      })
      .catch((e) => {
        console.log(e);
        return res.json({
          status: "failed",
          msg: error,
        });
      });
  });
});

router.get("/receipt/:id", authMiddleware, (req, res) => {
  const id = req.params.id;
  CakeModel.findById(id)
    .then((cake) => {
      if (!cake) {
        return res.json({
          status: "failed",
          msg: "Not found",
        });
      }
      return res.json({
        status: "success",
        msg: cake,
      });
    })
    .catch((e) => {
      return res.json({
        status: "failed",
        msg: e,
      });
    });
});

router.get("/orders", authMiddleware, (req, res) => {
  const user = req.user;
  const myCakes = CakeModel.find({ user: user._id, paid: true })
    .then((cakes) => {
      return res.status(200).json(cakes);
    })
    .catch((e) => {
      return res.status(400).json(e);
    });
});

module.exports = router;
