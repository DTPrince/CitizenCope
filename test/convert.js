const { buildClientSchema } = require("graphql");
const fs = require("fs");

const introspectionSchemaResult = JSON.parse(fs.readFileSync("client-1634429199685.json"));
const graphqlSchemaObj = buildClientSchema(introspectionSchemaResult);