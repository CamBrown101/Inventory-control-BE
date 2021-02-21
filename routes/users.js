/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (pool) => {

  router.get("/", (req, res) => {
    const sql = `SELECT * FROM users`;
    pool.query(sql)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/del", (req, res) => {
    res.json({ id: 1 });
    
  });

  router.post("/", (req, res) => {
    data = req.body;
    // res.send(data);
    // console.log(data.name);
    // return;

    const sql = `insert into users (name) values ($1) returning *`;
    const params = [data.name];

    pool.query(sql, params)
      .then(data => {
        const user = data.rows[0];
        const vars = { user };
        res.render("main", vars);
        // res.json({ rows });
        // res.send("ok");
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
