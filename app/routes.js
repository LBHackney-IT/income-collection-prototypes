const express = require('express')
const cases = require('./cases')
const router = express.Router()


router.get('/case-details', function(req, res) {
  res.render('case-details/index', cases.first())
})

module.exports = router
