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
  res.send({
    name :"Sum2Number",
    sum  : Sum2Number(1,2)
  });
    
});

function Sum2Number(a,b){
  return a+b;
}

router.get('/Sum2Number', function(req, res, next) {
  res.send({
    name :"Sum2Number",
    sum  : Sum2Number(1,2)
  });
    
});
function Sum2Number(a,b){
  return a+b;
}

router.get('/Compare2Number', function(req, res, next) {
  res.send({
    name :"Compare2Number",
    sum  : Compare2Number(1,2)
  });
});

function Compare2Number(a, b) {
  return a === b;
}

router.get('/Typeof', function(req, res, next) {
  res.send({
    name :"CompareTypeof2Number",
    sum  : Typeof(1,2)
  });
});
function Typeof(a) {
  return typeof a;
}
module.exports = router;
