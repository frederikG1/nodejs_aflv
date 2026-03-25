import express from 'express';
const app = express();

app.use(express.json());

app.use(express.static("public"));


// =============== Pages ============

import pagesRouter from './routers/pagesRouter.js';

app.use('/', pagesRouter);


app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
