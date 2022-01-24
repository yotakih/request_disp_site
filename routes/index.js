var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send(
    `<pre>${JSON.stringify(
      reqToJson(req),
      null,
      2
    )}</pre>`
  );
});

router.get("/:type/:id", function (req, res, next) {
  res.send(
    `<pre>${JSON.stringify(
      reqToJson(req),
      null,
      2
    )}</pre>`
  );
});

router.post("/", function (req, res, next) {
  res.send(
    `<pre>${JSON.stringify(
      reqToJson(req),
      null,
      2
    )}</pre>`
  );
});

function reqToJson(req) {
  return {
    url: req.url,
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body,
  };
}

module.exports = router;
