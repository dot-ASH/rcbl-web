// const { createServer } = require("http");
// const { parse } = require("url");
// const next = require("next");

// const dev = process.env.NODE_ENV !== "production";
// const hostname =
//   process.env.NODE_ENV !== "production" ? "localhost" : "http://royalcraftbd.com";
// const port = process.env.PORT || 4789;
// // when using middleware `hostname` and `port` must be provided below
// const app = next({ dev, hostname, port });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   createServer(async (req, res) => {
//     try {
//       // Be sure to pass `true` as the second argument to `url.parse`.
//       // This tells it to parse the query portion of the URL.
//       const parsedUrl = parse(req.url, true);
//       const { pathname, query } = parsedUrl;

//       if (pathname === "/a") {
//         await app.render(req, res, "/a", query);
//       } else if (pathname === "/b") {
//         await app.render(req, res, "/b", query);
//       } else {
//         await handle(req, res, parsedUrl);
//       }
//     } catch (err) {
//       console.error("Error occurred handling", req.url, err);
//       res.statusCode = 500;
//       res.end("internal server error");
//     }
//   })
//     .once("error", (err) => {
//       console.error(err);
//       process.exit(1);
//     })
//     .listen(port, () => {
//       console.log(`> Ready on http://${hostname}:${port}`);
//     });
// });

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "rcbl",
  password: "postgres",
  port: 5432,
});

app.get("/", (req, res) => {
  pool.query("SELECT role, id, email, full_name, created_at FROM admin_panel;", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

// app.get("/items", (req, res) => {
//   pool.query("SELECT * FROM items", (error, results) => {
//     if (error) {
//       throw error;
//     }
//     res.status(200).json(results.rows);
//   });
// });

// app.post("/items", (req, res) => {
//   const { name } = req.body;
//   pool.query(
//     "INSERT INTO items (name) VALUES ($1)",
//     [name],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       res.status(201).send("Item added successfully.");
//     }
//   );
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
