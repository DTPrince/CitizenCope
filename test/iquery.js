const fetch = require("node-fetch");
const { introspectionQuery } = require("graphql");
const fs = require("fs");

fetch("https://classic.warcraftlogs.com/api/v2/client", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query: introspectionQuery })
})
  .then(res => res.json())
  .then(res =>
    fs.writeFileSync("result.json", JSON.stringify(res.data, null, 2))
  );