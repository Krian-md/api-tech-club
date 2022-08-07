"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.get('/', (req, res) => {
    res.send('<h4>Node.js and typescript! What the hell!</h4>');
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
// 'use strict';
// https://habr.com/ru/company/ruvds/blog/321104/
// https://metanit.com/web/nodejs/6.1.php
// https://blog.logrocket.com/how-to-set-up-node-typescript-express/
// const express = require('express');
// const dotenv = require('dotenv');
// const MongoClient = require('mongodb').MongoClient;
// const bodyParser = require('body-parser');
// const db = require('./src/config/db');
// const app = express();
// dotenv.config();
// const port = 8000;
// app.use(bodyParser.urlencoded({ extended: true }));
// const mongoClient = new MongoClient(db.url);
// async function run() {
//   try {
//     await mongoClient.connect();
//     app.get('/', (req, res) => {
//       res.send('<h3> Okey </h3>');
//     });
//     app.listen(port, () => {
//       console.log('Server is running!');
//     });
//   } catch (err) {
//     console.log(err);
//   } finally {
//     await mongoClient.close();
//   }
// }
// run();
// MongoClient.connect(db.url, (err, dataBase) => {
//   if (err) {
//     return console.log(err);
//   }
//   require('./src/routes')(app, {});
// });
// app.get('/', (req, res) => {
//   res.send('Hello world!');
// });
// require('./src/routes')(app, {});
// app.listen(port, () => {
//   console.log('Server is running!');
// });
