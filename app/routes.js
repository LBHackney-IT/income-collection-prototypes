const express = require('express')
const cases = require('./cases')
const router = express.Router()


router.get('/case-details', function(req, res) {
  res.render('case-details/index', cases.first())
})

router.get('/case-details/split-view', function(req, res) {
  res.render('case-details/split-view', cases.first())
})

router.get('/case-details/timeline', function (req, res) {
  res.render('case-details/timeline', cases.first())
})

router.get('/case-details/:id', function(req, res) {
  const caseObject = cases.find(req.params.id)
  res.render('case-details/split-view', caseObject)
})

router.get('/worktray/tab-with-groups', function(req, res) {
  res.render('worktray/tab-with-groups', { cases: cases.records })
})

router.get('/worktray/tab-sortable-table', function(req, res) {
  res.render('worktray/tab-sortable-table', { cases: cases.records })
})


module.exports = router
