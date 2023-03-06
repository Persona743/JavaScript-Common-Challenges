// generate arrays with Object.keys()

let users = {
    Alan: {
        age: 27,
        online: false,
    },
    Jeff: {
        age: 32,
        online: true,
    },
    Sarah: {
        age: 48,
        online: false,
    },
    Ryan: {
        age: 19,
        online: true,
    },
};

let getArrayOfUsers = (obj) => {
    return Object.keys(obj);
};

console.log(getArrayOfUsers(users));
