var express = require('express');
var router = express.Router();
var handle = require('../handlers')

router.post('/make', handle.authUser, handle.makeFood)
router.get('/cusines', handle.getCusines)
router.get('/ingredients', handle.getIngredients)
router.post('/insert/:uid', handle.insertFood)
router.get('/:uid', handle.getUserFood)

module.exports = router