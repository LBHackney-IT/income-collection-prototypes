const express = require('express')
const cases = require('./cases')
const router = express.Router()


router.get('/case-details', function(req, res) {
  res.render('case-details/index', cases.first())
})

router.get('/case-details/:id', function(req, res) {
  const caseObject = cases.find(req.params.id)
  res.render('case-details/index', caseObject)
})

module.exports = router
