const express = require('express');
const bodyParser = require ('body-parser');

const app = express();

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended:true}));

module.exports = App;
