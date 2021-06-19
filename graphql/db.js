let users = [
    {
        id: 0,
        username: "ehyfjuqrfs",
        phone_number: "010-1234-1234",
    },
    {
        id: 1,
        username: "mbtpreibdd",
        phone_number: "010-1234-1235",
    },
    {
        id: 2,
        username: "zkjyrnyhtv",
        phone_number: "010-1234-1236",
    },
]

export const getUsers = () => users;

export const getUserById = id => {
    const filteredUser = users.filter(user => id === user.id);
    return filteredUser[0];
}

export const deleteUser = (id) => {
    const cleanedUsers = users.filter(user => id !== user.id);
    if (users.length > cleanedUsers.length) {
        users = cleanedUsers;
        return true;
    }
    return false;
}

export const addUser = (username, phone_number) => {
    const id = users.length > 0 ? users[users.length - 1].id + 1 : 0;
    const newUser = {
        id,
        username,
        phone_number,
    };
    users.push(newUser);
    return newUser;
}