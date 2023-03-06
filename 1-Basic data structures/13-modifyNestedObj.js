let nestedObject = {
    id: 17616697,
    date: '5 October',
    data: {
        totalUsers: 90,
        online: 21,
        onlineStatus: {
            active: 12,
            away: 8,
            busy: 7,
        },
    },
};

nestedObject.data.onlineStatus.busy = 10; //this is how we assign value to nested object
console.log(nestedObject);

// another example with function

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27,
};

function checkInventory(scannedItem) {
    return foods[scannedItem];
}

console.log(checkInventory('apples'));
