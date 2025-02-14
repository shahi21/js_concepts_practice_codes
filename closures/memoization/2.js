const cache={};
async function fetchUserData(userId){
    if(cache[userId]){
        console.log("Fetching from cache...");
        return cache[userId];
    }
    console.log("Fetching from API..");
    const response=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const userData=await response.json();
    cache[userId]=userData;
    return userData;
}

fetchUserData(1).then(console.log);
fetchUserData(1).then(console.log); 
