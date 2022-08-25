//###   LOOPS   ###

const toDoList = [
    "wake up",
    "brush my teeth",
    "excercise",
    "study JS",
    "eat healthy"
];

//for loop

for (i=0; i < toDoList.length; i++) {
    toDoList[i] = toDoList[i] + "!";
    console.log(toDoList[i]);
}

//forEach 

toDoList.forEach(function(element,i){
    console.log("This is forEach loop: ",element,i);
})

//while c

const counterOne =1;
while (counterOne<=10){
    console.log(counterOne);
    counterOne++;
}

//do-while 

const counterTwo = 10;
do{
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo>0);