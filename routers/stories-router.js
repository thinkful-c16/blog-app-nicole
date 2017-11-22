'use strict';

const express = require('express');
const router = express.Router();

var data = require('../db/dummy-data');

const { DATABASE } = require('../config');
const knex = require('knex')(DATABASE);

/* ========== GET/READ ALL ITEMS ========== */
router.get('/stories', (req, res) => {

  knex('stories')
    .select()
    .then(results => {
      res.json(results);
    })
    .catch(err => console.log(err));
});

/* ========== GET/READ SINGLE ITEMS ========== */
router.get('/stories/:id', (req, res) => {
  knex('stories')
    .select()
    .then(results => {
      const id = Number(req.params.id);
      const item = results.find((obj) => obj.id === id);
      res.json(item);
  })
  .catch(err => console.log(err));
});

/* ========== POST/CREATE ITEM ========== */
router.post('/stories', (req, res) => {  
  const {title, content} = req.body;
  
  // /***** Never Trust Users! *****/
  
  const newItem = {
    title, content
  };

  knex
    .insert(newItem)
    .into('stories')
    .then(result => {
      res.json(result).status(201);
    })
    .catch(err => console.log(err));
});

/* ========== PUT/UPDATE A SINGLE ITEM ========== */
router.put('/stories/:id', (req, res) => {
  const {title, content} = req.body;
  
  /***** Never Trust Users! *****/
  
  const id = Number(req.params.id);

  knex('stories')
    .select()
    .where('id', id)
    .update({
      title, 
      content
    })
    .then(result => {
      res.json(result);
    })
    .catch(err => console.log(err));
});

/* ========== DELETE/REMOVE A SINGLE ITEM ========== */
router.delete('/stories/:id', (req, res) => {
  const id = Number(req.params.id);

  knex('stories')
    .where('id', id)
    .del()
    .then(result => {
      res.json(result);
    });
});

module.exports = router;