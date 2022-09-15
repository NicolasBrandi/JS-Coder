let correct
const database = [
    {
        username: "sofia",
        password: "1234"
    },
    {
        username:"pedro",
        password: "444"
    },
    {
        username:"alberto",
        password:"111"
    },
    {
        username:"juliana",
        password:"111"
    },
    {
        username:"maria",
        password:"111"
    },
    {
        username:"nicolas",
        password:"111"
    }
];

const facebookFeed = [
    {
        
        username: "sofia",
        topic: "I am learning JS",
        comments: 12 
    },
    {
        username: "nicolas",
        topic: "Reading the newspaper",
        comments:120
    },
    {
        username: "Pedro",
        topic: "I am having breakfast",
        comments:55
    },
    {
        username: "juliana",
        topic: "Reading the newspaper",
        comments:156
    },
    {
        username: "sofia",
        topic: "Reading the newspaper",
        comments:12
    }
]

let usernameInfo = prompt("Please enter your username: ");
let passwordInfo = prompt("Please enter your password: ");

function correctUser(user,pass) {
    for (i=0 ; i< database.length; i++) {
        if(user === database[i].username && pass === database[i].password){
            return true
        }
    }
    return false
}

function signIn(userInfo,passInfo){
    let newFeed = {}
    do{
        if (correctUser(userInfo,passInfo)){
            console.log(facebookFeed);
            newFeed.username = userInfo
            newFeed.topic = prompt(`${userInfo}, what are you thinking about?: `)
            newFeed.comments = Math.floor(Math.random()*200)
            facebookFeed.push(newFeed)
            correct = 0
        }else {
            alert("Wrong user, pls try again")
            userInfo = prompt("Please enter your username: ");
            passInfo = prompt("Please enter your password: ");
            correct = 1;
        }
    } while(correct === 1);
    
}

function thereIsFeed(feed,searchName){
    return feed.some(ele=> ele.username=== searchName)
}
//function thereIsFeed(feed,searchName){
    //feed.forEach(ele => {
    //    console.log(ele.username)
    //    console.log(ele.username === searchName)
        //if (ele.username == searchName){  no funciona, por que?
        //    return true
        //}
    //})
//}

function searchingFeed(feedSearchName){
    const searchEle = facebookFeed.filter(ele => ele.username === feedSearchName)
    console.log(searchEle)
}

signIn(usernameInfo,passwordInfo);

let feedSearchName = prompt('Would you like to search a friends feed? Select their name: ')
if(thereIsFeed(facebookFeed,feedSearchName)){
    searchingFeed(feedSearchName)
}else{
    console.log('There is no feed available from this user')
}



