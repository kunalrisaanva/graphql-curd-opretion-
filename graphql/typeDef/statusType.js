const { GraphQLObjectType , GraphQLString, GraphQLBoolean } = require("graphql");

const statusType = new GraphQLObjectType({
    name:"statusType",
    description:"user",
    fields:{
        succsess:{type:GraphQLBoolean},
        message:{type:GraphQLString},
        error:{type:GraphQLString},
    }
})

module.exports = statusType 