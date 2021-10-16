const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = require("./node_modules/graphql/index.js");

const UserType = new GraphQLObjectType({
  name: "UserQuery",
  fields: () => ({
    firstName: {
      type: GraphQLString,
      resolve() {
        return "John";
      },
    },
    lastName: {
      type: GraphQLString,
      resolve() {
        return "Cena";
      },
    },
  }),
});

var schema = new GraphQLSchema({
  query: UserType,
});

module.exports = {
  schema,
};
