const { GraphQLObjectType, GraphQLList, GraphQLString } = require("graphql");
const userType = require("../typeDef/userType");
const statusType = require("../typeDef/statusType");
const user = require("../../model/userModel");



const USER_CREATE = {
    type: userType,
    args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    },
    resolve: async (parent, args) => {
        // console.log(args);
        const { id, name, email, phone } = args
        const userDetails = new user({
            id,
            name,
            email,
            phone
        });
        const data = await userDetails.save();
        // console.log(data)
        return data
    }

}


const USER_UPDATE = {
    type: userType  ,
    args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    },
    resolve: async (parent, args) => {
        const { id, name, email, phone } = args
        const data = await user.updateOne({id:id},{$set:{name,email,phone}})
        // const result = await user.find().where({id:id})
        return args

}}



const USER_DELETE = {
    type: statusType  ,
    args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    },
    resolve: async (parent, args) => {
        const { id, name, email, phone } = args
        const data = await user.deleteOne({name:name})
        return {
            succsess:true,message:"user deleted",error:""
        }

}}


module.exports = {
    USER_CREATE,
    USER_UPDATE,
    USER_DELETE
}