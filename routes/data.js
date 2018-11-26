const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const moment = require('moment');

const Data = require('../models/Data');

// @route GET /api/data/:date
// @desc GET data for current date
// @reduxAction onDateChange

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
                .catch(err => res.json(err));
            } else {
              res.status(500).send('500 - Failed to add date to database.');
            }
          })
          .catch(err => res.json(err));
      }
    })
    .catch(err => res.json(err));
});

// @route POST /api/data/target
// @desc SET Target for specific date
// @reduxAction setTargetAmount

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
      } else {
        res.status(404).send('Invalid Date');
      }
    })
    .catch(err => res.json(err));
});

module.exports = router;

// @route POST /api/data/total
// @desc SET Target
// @reduxAction plusIntakeAmount

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
          .then(newTotal => res.json(newTotal))
          .catch(err => res.json(err));
      } else {
        res.status(404).send('Invalid Date.');
      }
    })
    .catch(err => res.json(err));
});

module.exports = router;
