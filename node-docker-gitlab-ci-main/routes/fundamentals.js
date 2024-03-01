const express = require('express');
const router = express.Router();

require('dotenv').config()
const variableData = process.env.variableData || 'Fundamentals'

router.get('/', function(req, res, next) {
  res.send({
    name: 'Fundamentals',
    server: 'express',
    variableData: variableData
  });
});

router.get('/Sum2Number', function(req, res, next) {
  res.send(Sum2Number(1,2));
});

function Sum2Number(a,b){
  return a+b;
}

module.exports = router;
