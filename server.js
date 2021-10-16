const justify = require("@justify");
const { graphql } = require("./node_modules/graphql/index.js");

const { httpConfig } = require("config.js");
const { schema } = require("schema.js");

const server = justify.createServer(httpConfig);
/*
  post bodies are TODO in just-js http,
  thus passing graphql-query in params
 */
server.get("/graphql", async (res, req) => {
  let query = req.qs.split("=") ? req.qs.split("=")[1] : "";
  const result = await graphql(schema, query);

  res.json(JSON.stringify(result));
});

server.listen(httpConfig.port, httpConfig.address);
