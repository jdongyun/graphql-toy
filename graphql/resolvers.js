import { getUsers, getUserById, addUser, deleteUser } from "./db";

const resolvers = {
    Query: {
        users: () => getUsers(),
        user: (_, { id }) => getUserById(id),
    },
    Mutation: {
        addUser: (_, { username, phone_number}) => addUser(username, phone_number),
        deleteUser: (_, { id }) => deleteUser(id),
    }
};

export default resolvers;