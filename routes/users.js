/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

module.exports = (pool) => {
  router.get("/", (req, res) => {
    const sql = `SELECT * FROM users`;
    pool
      .query(sql)
      .then((data) => {
        const users = data.rows;
        console.log(users);
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
