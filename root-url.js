var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  res.send({
    m: 'Root URL'
  })
})

module.exports = router
