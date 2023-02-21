const friends = ['taniya', 'riche', 'surove', 'lima', 'mim'];
let newFriends = [];
for(const friend of friends){
    const length = friend.length;
    if(length % 2 === 0){
        newFriends.push(friend);
    }
}

console.log(newFriends);