const { GraphQLObjectType , GraphQLString } = require("graphql");

const userType = new GraphQLObjectType({
    name:"userType",
    description:"user",
    fields:{
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        phone:{type:GraphQLString},
    }
})

module.exports = userType 