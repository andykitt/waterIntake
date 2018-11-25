const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const moment = require('moment');

const Data = require('../models/Data');

// @route GET /api/data/:date

// @desc Get current day data

router.get('/:date', (req, res) => {
  Data.findOne({
    date: { $regex: req.params.date }
  })
    .then(dayExists => {
      if (dayExists) {
        res.send(dayExists);
      } else {
        const newData = {
          date: moment(req.params.date).format('YYYY-MM-DD'),
          target: 1000,
          dayIntakeAmount: 0
        };

        Data.findOne({ date: { $regex: req.params.date } })
          .then(dayExists => {
            if (!dayExists) {
              new Data(newData)
                .save()
                .then(newDate => res.json(newDate))
                .catch(err => res.send(err));
            }
          })
          .catch(err => res.send(err));
      }
    })
    .catch(err => res.send(err));
});

// @route POST /api/data/target
// @desc SET Target

router.post('/target', (req, res) => {
  Data.findOne({ date: { $regex: req.body.date } })
    .then(targetData => {
      if (targetData) {
        Data.findOneAndUpdate(
          { date: { $regex: req.body.date } },
          { target: req.body.target },
          { new: true }
        )
          .then(newTarget => res.json(newTarget))
          .catch(err => res.json(err));
      }
    })
    .catch(err => res.json(err));
});

module.exports = router;

// @route POST /api/data/newTotal
// @desc SET Target

router.post('/total', (req, res) => {
  Data.findOne({ date: { $regex: req.body.date } })
    .then(IntakeData => {
      if (IntakeData) {
        Data.findOneAndUpdate(
          { date: { $regex: req.body.date } },
          {
            dayIntakeAmount: req.body.amount,
            $push: { logs: { timestamp: Date.now(), amount: req.body.amount } }
          },
          { new: true }
        )
          .then(result => res.json(result))
          .catch(err => res.json(err));
      }
    })
    .catch(err => res.json(err));
});

router.post('/logs', (req, res) => {
  Data.findOne({ date: { $regex: req.body.date } }).then(date => {
    if (date) {
      Data.findOneAndUpdate(
        { date: { $regex: req.body.date } },
        { $push: { logs: { timestamp: Date.now(), amount: req.body.amount } } },
        { new: true, upsert: true }
      )
        .then(result => res.json(result))
        .catch(err => res.json(err));
    }
  });
});

module.exports = router;
