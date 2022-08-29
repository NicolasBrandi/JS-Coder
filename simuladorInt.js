let correct
const database = [
    {
        username: "nicolas",
        password: "1234"
    },
    {
        username:"pedro",
        password: "444"
    },
    {
        username:"alberto",
        password:"111"
    }
];

const facebookFeed = [
    {
        username: "Juan",
        topic: "I am learning JS"
    },
    {
        username: "Pedro",
        topic: "I am having breakfast"
    },
    {
        username: "Nicolas",
        topic: "Reading the newspaper"
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
    do{
        if (correctUser(userInfo,passInfo)){
            console.log(facebookFeed);
            correct = 0
        }else {
            alert("Wrong user, pls try again")
            userInfo = prompt("Please enter your username: ");
            passInfo = prompt("Please enter your password: ");
            correct = 1;
        }
    } while(correct === 1);
    
}

signIn(usernameInfo,passwordInfo);