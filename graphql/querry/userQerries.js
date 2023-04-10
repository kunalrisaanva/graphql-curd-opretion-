const  { GraphQLObjectType , GraphQLList, GraphQLString} = require("graphql");

const userType = require("../typeDef/userType");
const user = require("../../model/userModel");


const USER_LIST = {
     type: new GraphQLList(userType),
     resolve: async(p,a)=>{
        const data = await user.find();
        // console.log(data);
        return data
     }
};

const ONE_USER_DATA = {
    type:new GraphQLList(userType),
    args:{
      name:{type:GraphQLString}
    },
    resolve:async(perent,args)=>{
        const {name} = args
        const data = await user.find().where({name})
        return data;
    }
}

module.exports = {
    USER_LIST,
    ONE_USER_DATA
}
