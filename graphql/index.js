const { GraphQLObjectType ,GraphQLSchema} = require("graphql");

const {USER_LIST,ONE_USER_DATA} = require("./querry/userQerries")



const RootQuery = new GraphQLObjectType({
    name:"user",
    description:"get all data",
    fields:{
        USER_LIST,
        ONE_USER_DATA
    }
});

// const {USER_CREATE,USER_UPDATE} = require("./mutation/userMutation")
const {USER_CREATE,USER_UPDATE,USER_DELETE} = require("./mutation/userMutation")


const Mutation = new GraphQLObjectType({
    name:"mutation",
    description:"user craete update and delate",
    fields:{
        USER_CREATE,
        USER_UPDATE,
        USER_DELETE
    }
})

module.exports = new GraphQLSchema({query:RootQuery ,mutation:Mutation});